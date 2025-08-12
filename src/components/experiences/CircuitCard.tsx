'use client';

import { motion } from 'framer-motion';
import { 
  Clock,
  Users,
  Star,
  ArrowRight,
  MapPin
} from 'lucide-react';
import Link from 'next/link';
import { Circuit } from '@/types/circuits';
import { categoriesMetadata, calculerPrixCircuit } from '@/data/circuits';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface CircuitCardProps {
  circuit: Circuit;
  showCategory?: boolean;
  variant?: 'default' | 'compact' | 'featured';
  onBookingClick?: (circuit: Circuit) => void;
}

export default function CircuitCard({ 
  circuit, 
  showCategory = true, 
  variant = 'default',
  onBookingClick 
}: CircuitCardProps) {
  const prixCalcule = calculerPrixCircuit({
    circuit,
    nombreAdultes: 1,
    nombreEnfants: 0
  });

  const prixMinimum = Math.min(...circuit.tarifs.map(t => t.prix));
  const categoryData = categoriesMetadata[circuit.categories[0]];

  const cardClasses = {
    default: "bg-blue-900/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-blue-700/50",
    compact: "bg-blue-900/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-blue-700/50",
    featured: "bg-blue-900/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 border-blue-400/60"
  };

  const imageHeight = {
    default: "h-48",
    compact: "h-32",
    featured: "h-64"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cardClasses[variant]}
    >
      {/* Image du circuit */}
      <div className={`relative ${imageHeight[variant]} overflow-hidden`}>
        <OptimizedImage
          src={circuit.imageHero}
          alt={circuit.nom}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {showCategory && (
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryData.color}`}>
              {categoryData.icon} {categoryData.nom}
            </span>
          )}
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black/50 text-white">
              {circuit.difficulte}
            </span>
            {circuit.bateauRequis && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/80 text-white">
                🚤 Bateau
              </span>
            )}
          </div>
        </div>

        {/* Overlay pour featured */}
        {variant === 'featured' && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        )}
      </div>

      {/* Contenu de la carte */}
      <div className={`p-${variant === 'compact' ? '4' : '6'}`}>
        <div className="flex items-start justify-between mb-2">
          <h3 className={`font-bold text-white font-playfair ${
            variant === 'featured' ? 'text-2xl' : variant === 'compact' ? 'text-lg' : 'text-xl'
          }`}>
            {circuit.nom}
          </h3>
          {variant === 'featured' && (
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Populaire</span>
            </div>
          )}
        </div>

        <p className={`text-gray-300 mb-4 ${variant === 'compact' ? 'line-clamp-1 text-sm' : 'line-clamp-2'}`}>
          {circuit.description}
        </p>

        {/* Informations pratiques */}
        <div className={`flex items-center gap-4 mb-4 text-sm text-gray-400 ${
          variant === 'compact' ? 'gap-3' : 'gap-4'
        }`}>
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
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{circuit.pointDepart}</span>
          </div>
        </div>

        {/* Points forts (seulement pour default et featured) */}
        {variant !== 'compact' && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {circuit.highlights.slice(0, variant === 'featured' ? 3 : 2).map((highlight, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {highlight}
                </span>
              ))}
              {circuit.highlights.length > (variant === 'featured' ? 3 : 2) && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  +{circuit.highlights.length - (variant === 'featured' ? 3 : 2)} autres
                </span>
              )}
            </div>
          </div>
        )}

        {/* Prix et actions */}
        <div className="flex items-center justify-between">
          <div>
            <span className={`font-bold text-white ${
              variant === 'featured' ? 'text-3xl' : variant === 'compact' ? 'text-xl' : 'text-2xl'
            }`}>
              {prixMinimum.toLocaleString()}
            </span>
            <span className="text-gray-300 ml-1">F CFA</span>
            <div className="text-xs text-gray-400">à partir de</div>
          </div>
          
          <div className="flex gap-2">
            {onBookingClick && (
              <button
                onClick={() => onBookingClick(circuit)}
                className={`bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center gap-2 ${
                  variant === 'compact' ? 'px-3 py-1 text-sm rounded-md' : 'px-4 py-2 rounded-lg'
                }`}
              >
                Réserver
              </button>
            )}
            <Link
              href={`/experiences/circuit/${circuit.slug}`}
              className={`bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center gap-2 ${
                variant === 'compact' ? 'px-3 py-1 text-sm rounded-md' : 'px-4 py-2 rounded-lg'
              }`}
            >
              {variant === 'compact' ? 'Voir' : 'Découvrir'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Informations supplémentaires pour featured */}
        {variant === 'featured' && (
          <div className="mt-4 pt-4 border-t border-blue-700/50">
            <div className="flex items-center justify-between text-sm text-gray-300">
              <span>Inclus: {circuit.included.length} services</span>
              {circuit.saisonOptimale && (
                <span>Meilleure période: {circuit.saisonOptimale.slice(0, 2).join(', ')}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
