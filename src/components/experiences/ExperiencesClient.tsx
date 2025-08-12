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
  X
} from 'lucide-react';
import Link from 'next/link';
import { circuits, categoriesMetadata, calculerPrixCircuit } from '@/data/circuits';
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
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryData.color}`}>
            {categoryData.icon} {categoryData.nom}
          </span>
        </div>
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

export default function ExperiencesClient() {
  const [filters, setFilters] = useState<CircuitFilter>({});

  // Filtrage des circuits
  const filteredCircuits = useMemo(() => {
    return circuits.filter(circuit => {
      // Filtre par catégories
      if (filters.categories && filters.categories.length > 0) {
        if (!circuit.categories.some(cat => filters.categories!.includes(cat))) {
          return false;
        }
      }

      return true;
    });
  }, [circuits, filters]);

  // Fonction pour réinitialiser les filtres
  const resetFilters = () => {
    setFilters({});
  };

  // Fonction pour mettre à jour un filtre
  const updateFilter = (key: keyof CircuitFilter, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
      {/* Section Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
              Découvrez Nos Circuits
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              8 expériences authentiques pour explorer Grand-Popo : nature, culture, artisanat et histoire
            </p>
          </motion.div>

          {/* Filtres rapides par catégorie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
              {/* Boutons de filtres rapides */}
              <div className="flex flex-wrap gap-2 justify-center">
                {Object.entries(categoriesMetadata).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => {
                      const currentCategories = filters.categories || [];
                      const categoryKey = key as CircuitCategory;
                      const newCategories = currentCategories.includes(categoryKey)
                        ? currentCategories.filter(c => c !== categoryKey)
                        : [...currentCategories, categoryKey];
                      updateFilter('categories', newCategories.length > 0 ? newCategories : undefined);
                    }}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      filters.categories?.includes(key as CircuitCategory)
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'bg-blue-800/30 text-white hover:bg-blue-700/50'
                    }`}
                  >
                    {category.icon} {category.nom}
                  </button>
                ))}

                {Object.keys(filters).length > 0 && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-200 rounded-full hover:bg-red-500/30 transition-all duration-300"
                  >
                    <X className="w-4 h-4" />
                    Réinitialiser
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section des circuits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{filteredCircuits.length}</div>
                <div className="text-gray-300">Circuit{filteredCircuits.length > 1 ? 's' : ''} disponible{filteredCircuits.length > 1 ? 's' : ''}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{Object.keys(categoriesMetadata).length}</div>
                <div className="text-gray-300">Catégories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-gray-300">Authentique</div>
              </div>
            </div>
          </motion.div>

          {/* Grille des circuits */}
          {filteredCircuits.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCircuits.map((circuit, index) => (
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
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Aucun circuit trouvé</h3>
              <p className="text-gray-300 mb-8">
                Essayez de modifier vos filtres ou réinitialisez-les
              </p>
              <button
                onClick={resetFilters}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Réinitialiser les filtres
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section catégories */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">
              Explorez par Catégorie
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos circuits organisés par thématiques pour trouver l'expérience qui vous correspond
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(categoriesMetadata).map(([key, category], index) => {
              const circuitsCount = circuits.filter(c => c.categories.includes(key as CircuitCategory)).length;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/experiences/${key}`}>
                    <div className="bg-blue-800/20 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-blue-600/30 hover:border-blue-400/60 cursor-pointer">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg text-2xl`}>
                        {category.icon}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-4">
                        {category.nom}
                      </h3>

                      <p className="text-gray-300 mb-6 flex-grow">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-blue-400 font-semibold">
                          {circuitsCount} circuit{circuitsCount > 1 ? 's' : ''}
                        </span>
                        <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
              Prêt pour Votre Aventure ?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Contactez Manos pour réserver votre circuit ou créer une expérience sur-mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-block"
              >
                Réserver Maintenant
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-800/50 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-block"
              >
                Demander des Infos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
