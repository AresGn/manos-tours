'use client';

import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Home, Tent, Building, Star } from 'lucide-react';

const accommodationTypes = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "Hôtels Boutique",
    description: "Établissements de charme avec vue sur l'océan et service personnalisé",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Cases Traditionnelles",
    description: "Hébergements authentiques rénovés dans le respect des traditions",
    color: "from-orange-500 to-red-400"
  },
  {
    icon: <Tent className="w-8 h-8" />,
    title: "Camping Équipé",
    description: "Expérience nature avec tout le confort face à la mer",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Homestay Authentique",
    description: "Séjour chez l'habitant pour une immersion culturelle totale",
    color: "from-purple-500 to-pink-400"
  }
];

export default function HebergementsClient() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            className="absolute inset-0 w-full h-full"
            alt="Hébergements à Grand-Popo"
            fallbackText="Hébergements à Grand-Popo"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hébergements
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Trouvez votre cocon parfait à Grand-Popo,
              <span className="text-blue-400"> du luxe à l'authentique</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">
              Types d'Hébergements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manos vous aide à choisir l'hébergement idéal selon vos envies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`
                  bg-gradient-to-br ${type.color} p-6 rounded-xl shadow-xl
                  transition-all duration-300 hover:shadow-2xl hover:scale-105
                  border border-white/10 hover:border-white/20
                `}>
                  <div className="text-white mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {type.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">
              Services Manos Tours
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Réservation simplifiée et accompagnement personnalisé
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Réservation Intégrée</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Calendrier temps réel des disponibilités
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Photos 360° et visites virtuelles
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Avis vérifiés de voyageurs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Prix transparents sans surprise
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Partenariats Premium</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Sélection rigoureuse des établissements
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Tarifs négociés pour nos clients
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Support 24/7 pendant votre séjour
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Garantie satisfaction Manos Tours
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Voir les Disponibilités
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Demander Conseil à Manos
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
