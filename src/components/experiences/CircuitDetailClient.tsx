'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Clock,
  Users,
  MapPin,
  Star,
  ArrowLeft,
  Calendar,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  Camera,
  Heart,
  Share2
} from 'lucide-react';
import Link from 'next/link';
import { Circuit } from '@/types/circuits';
import { categoriesMetadata, calculerPrixCircuit, circuits } from '@/data/circuits';
import OptimizedImage from '@/components/ui/OptimizedImage';
import BookingModal from './BookingModal';

interface CircuitDetailClientProps {
  circuit: Circuit;
}

// Composant pour le calculateur de prix
function PriceCalculator({ circuit, onOpenBooking }: { circuit: Circuit; onOpenBooking: (adultes: number, enfants: number) => void }) {
  const [nombreAdultes, setNombreAdultes] = useState(1);
  const [nombreEnfants, setNombreEnfants] = useState(0);

  const prixCalcule = calculerPrixCircuit({
    circuit,
    nombreAdultes,
    nombreEnfants
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Calculer le prix</h3>
      
      {/* Sélecteurs */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre d'adultes
          </label>
          <select
            value={nombreAdultes}
            onChange={(e) => setNombreAdultes(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1} adulte{i > 0 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {circuit.ageMinimum && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre d'enfants (≥ {circuit.ageMinimum} ans)
            </label>
            <select
              value={nombreEnfants}
              onChange={(e) => setNombreEnfants(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {[...Array(6)].map((_, i) => (
                <option key={i} value={i}>{i} enfant{i > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Détails du calcul */}
      <div className="border-t pt-4 mb-6">
        <div className="space-y-2 text-sm">
          {prixCalcule.detailsCalcul.map((detail, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-gray-600">{detail.split(':')[0]}:</span>
              <span className="font-medium">{detail.split(':')[1]}</span>
            </div>
          ))}
        </div>
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Total:</span>
            <span className="text-2xl font-bold text-blue-600">
              {prixCalcule.montantTotal.toLocaleString()} F CFA
            </span>
          </div>
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="space-y-3">
        <button
          onClick={() => onOpenBooking(nombreAdultes, nombreEnfants)}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
        >
          Réserver Maintenant
        </button>
        <Link
          href={`/contact?circuit=${circuit.slug}&info=true`}
          className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 text-center block"
        >
          Demander des Infos
        </Link>
      </div>

      {/* Contact direct */}
      <div className="mt-6 pt-6 border-t">
        <p className="text-sm text-gray-600 mb-3">Ou contactez Manos directement :</p>
        <div className="space-y-2">
          <a
            href="tel:+22997123456"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            +229 97 12 34 56
          </a>
          <a
            href="mailto:manos@grandpopotours.com"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            manos@grandpopotours.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CircuitDetailClient({ circuit }: CircuitDetailClientProps) {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingAdultes, setBookingAdultes] = useState(1);
  const [bookingEnfants, setBookingEnfants] = useState(0);

  const categoryData = categoriesMetadata[circuit.categories[0]];

  const handleOpenBooking = (adultes: number, enfants: number) => {
    setBookingAdultes(adultes);
    setBookingEnfants(enfants);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section Hero */}
      <section className="relative h-96 overflow-hidden">
        <OptimizedImage
          src={circuit.imageHero}
          alt={circuit.nom}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-gray-300 mb-6"
            >
              <Link href="/experiences" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Tous les circuits
              </Link>
              <span>/</span>
              <Link 
                href={`/experiences/${circuit.categories[0]}`}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {categoryData.nom}
              </Link>
              <span>/</span>
              <span className="text-white">{circuit.nom}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${categoryData.color} mb-4`}>
                {categoryData.icon} {categoryData.nom}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
                {circuit.nom}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl">
                {circuit.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-12">
              {/* Informations rapides */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-blue-900/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-blue-700/50"
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-white">Durée</div>
                    <div className="text-gray-300">{circuit.duree}</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="font-semibold text-white">Groupe</div>
                    <div className="text-gray-300">
                      {circuit.groupeMin ? `${circuit.groupeMin}-${circuit.groupeMax || '∞'}` : 'Flexible'}
                    </div>
                  </div>
                  <div className="text-center">
                    <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="font-semibold text-white">Difficulté</div>
                    <div className="text-gray-300">{circuit.difficulte}</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <div className="font-semibold text-white">Départ</div>
                    <div className="text-gray-300 text-sm">{circuit.pointDepart}</div>
                  </div>
                </div>
              </motion.div>

              {/* Description longue */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-blue-900/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6 font-playfair">
                  À propos de ce circuit
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {circuit.descriptionLongue}
                </p>
              </motion.div>

              {/* Activités */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-blue-900/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6 font-playfair">
                  Programme des activités
                </h2>
                <div className="space-y-4">
                  {circuit.activites.map((activite, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600/80 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-300 pt-1">{activite}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Points forts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-blue-900/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-700/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6 font-playfair">
                  Points forts
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {circuit.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Inclus/Non inclus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-blue-900/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-700/50"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      Inclus
                    </h3>
                    <ul className="space-y-2">
                      {circuit.included.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {circuit.notIncluded && circuit.notIncluded.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <AlertCircle className="w-6 h-6 text-red-400" />
                        Non inclus
                      </h3>
                      <ul className="space-y-2">
                        {circuit.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Colonne latérale */}
            <div className="lg:col-span-1">
              <PriceCalculator circuit={circuit} onOpenBooking={handleOpenBooking} />
            </div>
          </div>
        </div>
      </section>

      {/* Circuits similaires */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
              Circuits similaires
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez d'autres expériences qui pourraient vous intéresser
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {circuits
              .filter(c => c.id !== circuit.id && c.categories.some(cat => circuit.categories.includes(cat)))
              .slice(0, 3)
              .map((similarCircuit, index) => {
                const prixMin = Math.min(...similarCircuit.tarifs.map(t => t.prix));
                const categoryData = categoriesMetadata[similarCircuit.categories[0]];

                return (
                  <motion.div
                    key={similarCircuit.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-blue-900/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-blue-700/50"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <OptimizedImage
                        src={similarCircuit.imageHero}
                        alt={similarCircuit.nom}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryData.color}`}>
                          {categoryData.icon} {categoryData.nom}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 font-playfair">
                        {similarCircuit.nom}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {similarCircuit.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-white">
                            {prixMin.toLocaleString()}
                          </span>
                          <span className="text-gray-300 ml-1">F CFA</span>
                        </div>
                        <Link
                          href={`/experiences/circuit/${similarCircuit.slug}`}
                          className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
                        >
                          Découvrir
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Modal de réservation */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        circuit={circuit}
        initialAdultes={bookingAdultes}
        initialEnfants={bookingEnfants}
      />
    </div>
  );
}
