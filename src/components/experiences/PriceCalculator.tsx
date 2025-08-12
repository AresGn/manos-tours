'use client';

import { useState } from 'react';
import { 
  Phone,
  Mail,
  Calculator,
  Users,
  User
} from 'lucide-react';
import Link from 'next/link';
import { Circuit } from '@/types/circuits';
import { calculerPrixCircuit } from '@/data/circuits';

interface PriceCalculatorProps {
  circuit: Circuit;
  onBookingClick?: (adultes: number, enfants: number) => void;
  variant?: 'default' | 'compact' | 'inline';
  showContactInfo?: boolean;
}

export default function PriceCalculator({ 
  circuit, 
  onBookingClick,
  variant = 'default',
  showContactInfo = true 
}: PriceCalculatorProps) {
  const [nombreAdultes, setNombreAdultes] = useState(1);
  const [nombreEnfants, setNombreEnfants] = useState(0);

  const prixCalcule = calculerPrixCircuit({
    circuit,
    nombreAdultes,
    nombreEnfants
  });

  const containerClasses = {
    default: "bg-blue-900/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sticky top-24 border border-blue-700/50",
    compact: "bg-blue-900/90 backdrop-blur-sm rounded-lg shadow-md p-4 border border-blue-700/50",
    inline: "bg-blue-900/90 backdrop-blur-sm rounded-lg p-4 border border-blue-700/50"
  };

  return (
    <div className={containerClasses[variant]}>
      {/* Titre */}
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-blue-400" />
        <h3 className={`font-bold text-white ${
          variant === 'compact' ? 'text-lg' : 'text-xl'
        }`}>
          {variant === 'inline' ? 'Prix' : 'Calculer le prix'}
        </h3>
      </div>
      
      {/* Sélecteurs */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Users className="w-4 h-4 inline mr-1" />
            Nombre d'adultes
          </label>
          <select
            value={nombreAdultes}
            onChange={(e) => setNombreAdultes(Number(e.target.value))}
            className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1} adulte{i > 0 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {circuit.ageMinimum && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <User className="w-4 h-4 inline mr-1" />
              Nombre d'enfants (≥ {circuit.ageMinimum} ans)
            </label>
            <select
              value={nombreEnfants}
              onChange={(e) => setNombreEnfants(Number(e.target.value))}
              className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            >
              {[...Array(6)].map((_, i) => (
                <option key={i} value={i}>{i} enfant{i > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Détails du calcul */}
      <div className="border-t border-blue-700/50 pt-4 mb-6">
        <div className="space-y-2 text-sm">
          {prixCalcule.detailsCalcul.map((detail, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-gray-400">{detail.split(':')[0]}:</span>
              <span className="font-medium text-gray-300">{detail.split(':')[1]}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-blue-700/50 mt-4 pt-4">
          <div className="flex justify-between items-center">
            <span className={`font-bold text-white ${
              variant === 'compact' ? 'text-base' : 'text-lg'
            }`}>
              Total:
            </span>
            <span className={`font-bold text-blue-400 ${
              variant === 'compact' ? 'text-xl' : 'text-2xl'
            }`}>
              {prixCalcule.montantTotal.toLocaleString()} F CFA
            </span>
          </div>
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="space-y-3">
        {onBookingClick ? (
          <button
            onClick={() => onBookingClick(nombreAdultes, nombreEnfants)}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
          >
            Réserver Maintenant
          </button>
        ) : (
          <Link
            href={`/contact?circuit=${circuit.slug}&adultes=${nombreAdultes}&enfants=${nombreEnfants}`}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-center block"
          >
            Réserver Maintenant
          </Link>
        )}
        
        <Link
          href={`/contact?circuit=${circuit.slug}&info=true`}
          className="w-full border-2 border-blue-400 text-blue-400 py-3 px-4 rounded-lg font-semibold hover:bg-blue-800/50 transition-all duration-300 text-center block"
        >
          Demander des Infos
        </Link>
      </div>

      {/* Informations spéciales */}
      {circuit.groupeMin && circuit.groupeMax && (
        <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-400/50 rounded-lg">
          <p className="text-sm text-yellow-200">
            <strong>Groupe requis:</strong> {circuit.groupeMin} à {circuit.groupeMax} personnes
          </p>
        </div>
      )}

      {circuit.bateauRequis && (
        <div className="mt-4 p-3 bg-blue-500/20 border border-blue-400/50 rounded-lg">
          <p className="text-sm text-blue-200">
            <strong>Transport inclus:</strong> Bateau motorisé obligatoire
          </p>
        </div>
      )}

      {/* Contact direct */}
      {showContactInfo && variant !== 'inline' && (
        <div className="mt-6 pt-6 border-t border-blue-700/50">
          <p className="text-sm text-gray-400 mb-3">Ou contactez Manos directement :</p>
          <div className="space-y-2">
            <a
              href="tel:+22997123456"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              +229 97 12 34 56
            </a>
            <a
              href="mailto:manos@grandpopotours.com"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              manos@grandpopotours.com
            </a>
          </div>
        </div>
      )}

      {/* Note de bas de page */}
      {variant === 'default' && (
        <div className="mt-6 pt-4 border-t border-blue-700/50">
          <p className="text-xs text-gray-400 text-center">
            Prix indicatifs. Confirmation définitive par Manos selon disponibilités.
          </p>
        </div>
      )}
    </div>
  );
}
