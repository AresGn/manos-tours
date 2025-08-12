'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { 
  Search,
  Filter,
  Clock,
  Users,
  MapPin,
  Star,
  ArrowRight,
  ArrowLeft,
  X
} from 'lucide-react';
import Link from 'next/link';
import { circuits, categoriesMetadata, calculerPrixCircuit, getCircuitsByCategory } from '@/data/circuits';
import { Circuit, CircuitFilter, CircuitCategory } from '@/types/circuits';
import OptimizedImage from '@/components/ui/OptimizedImage';

// Composant pour une carte de circuit
interface CircuitCardProps {
  circuit: Circuit;
}

function CircuitCard({ circuit }: CircuitCardProps) {
  const prixCalcule = calculerPrixCircuit({
    circuit,
    nombreAdultes: 1,
    nombreEnfants: 0
  });

  const prixMinimum = Math.min(...circuit.tarifs.map(t => t.prix));
  const categoryData = categoriesMetadata[circuit.categories[0]];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-900/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-blue-700/50"
    >
      {/* Image du circuit */}
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={circuit.imageHero}
          alt={circuit.nom}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black/50 text-white">
            {circuit.difficulte}
          </span>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 font-playfair">
          {circuit.nom}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {circuit.description}
        </p>

        {/* Informations pratiques */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{circuit.duree}</span>
          </div>
          {circuit.groupeMin && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{circuit.groupeMin}-{circuit.groupeMax || '∞'} pers.</span>
            </div>
          )}
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {circuit.highlights.slice(0, 2).map((highlight, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-600/80 text-white"
              >
                {highlight}
              </span>
            ))}
            {circuit.highlights.length > 2 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-600/80 text-gray-300">
                +{circuit.highlights.length - 2} autres
              </span>
            )}
          </div>
        </div>

        {/* Prix et action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-white">
              {prixMinimum.toLocaleString()}
            </span>
            <span className="text-gray-300 ml-1">F CFA</span>
            <div className="text-xs text-gray-400">à partir de</div>
          </div>
          <Link
            href={`/experiences/circuit/${circuit.slug}`}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center gap-2"
          >
            Découvrir
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

interface CategoryPageClientProps {
  category: CircuitCategory;
}

export default function CategoryPageClient({ category }: CategoryPageClientProps) {
  const [sortBy, setSortBy] = useState<'prix' | 'duree' | 'nom'>('nom');

  const categoryData = categoriesMetadata[category];
  const categoryCircuits = getCircuitsByCategory(category);

  // Tri des circuits
  const sortedCircuits = useMemo(() => {
    let circuits = [...categoryCircuits];

    // Tri
    circuits.sort((a, b) => {
      switch (sortBy) {
        case 'prix':
          const prixA = Math.min(...a.tarifs.map(t => t.prix));
          const prixB = Math.min(...b.tarifs.map(t => t.prix));
          return prixA - prixB;
        case 'duree':
          const dureeOrder = { 'courte': 1, 'moyenne': 2, 'longue': 3 };
          return dureeOrder[a.dureeType] - dureeOrder[b.dureeType];
        case 'nom':
        default:
          return a.nom.localeCompare(b.nom);
      }
    });

    return circuits;
  }, [categoryCircuits, sortBy]);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
      {/* Section Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-gray-300 mb-8"
          >
            <Link href="/experiences" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Tous les circuits
            </Link>
            <span>/</span>
            <span className="text-white">{categoryData.nom}</span>
          </motion.div>

          {/* Titre et description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${categoryData.color} text-white text-4xl mb-6 shadow-lg`}>
              {categoryData.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
              {categoryData.nom}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {categoryData.description}
            </p>
            <div className="text-blue-400 font-semibold">
              {categoryCircuits.length} circuit{categoryCircuits.length > 1 ? 's' : ''} disponible{categoryCircuits.length > 1 ? 's' : ''}
            </div>
          </motion.div>

          {/* Tri simple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex justify-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'prix' | 'duree' | 'nom')}
                  className="px-4 py-3 bg-blue-800 rounded-xl border border-blue-600 focus:ring-2 focus:ring-blue-400 text-white min-w-[200px]"
                >
                  <option value="nom">Trier par nom</option>
                  <option value="prix">Trier par prix</option>
                  <option value="duree">Trier par durée</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section des circuits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCircuits.map((circuit, index) => (
              <motion.div
                key={circuit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CircuitCard circuit={circuit} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              Intéressé par ces circuits ?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Contactez Manos pour réserver ou personnaliser votre expérience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-block"
              >
                Réserver Maintenant
              </Link>
              <Link
                href="/experiences"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-800/50 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-block"
              >
                Voir Tous les Circuits
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
