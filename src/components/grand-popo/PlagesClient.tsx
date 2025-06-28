'use client';

import React from 'react';
import NatureSlider from './NatureSlider';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Waves, TreePine, Camera, Sun } from 'lucide-react';

const natureHighlights = [
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Plages de Sable Fin",
    description: "30 à 45 km de façade littorale splendide bordée de cocotiers, où les grandes tortues marines viennent pondre",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Mangroves d'Avlo",
    description: "Cité lacustre royaume de mangrove et de joncs, accessible en pirogue depuis Gbêkon",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Bouche du Roy",
    description: "Embouchure majestueuse où le fleuve Mono se jette dans l'océan Atlantique, sanctuaire de biodiversité",
    color: "from-orange-500 to-yellow-400"
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Lagune de Grand-Popo",
    description: "15 km de lagune communiquant avec la mer et le Mono, refuge des gros oiseaux d'Europe",
    color: "from-purple-500 to-pink-400"
  }
];

export default function PlagesClient() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/Plage/446-visiter-grand-popo-benin.jpg"
            className="absolute inset-0 w-full h-full"
            alt="Plages sauvages de Grand-Popo"
            fallbackText="Plages sauvages de Grand-Popo"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Plages & Nature
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Découvrez la "perle du sud-ouest béninois",
              <span className="text-cyan-400"> ses plages sauvages et sa nature exceptionnelle</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Nature Highlights */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">
              Trésors Naturels
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez la richesse écologique exceptionnelle de Grand-Popo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {natureHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`
                  bg-gradient-to-br ${highlight.color} p-6 rounded-xl shadow-xl
                  transition-all duration-300 hover:shadow-2xl hover:scale-105
                  border border-white/10 hover:border-white/20
                `}>
                  <div className="text-white mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nature Slider */}
      <NatureSlider />

      {/* Call to Action */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.98) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-playfair">
              Prêt pour l'Aventure ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Laissez Manos vous guider à travers ces merveilles naturelles
              pour une expérience inoubliable et respectueuse de l'environnement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Réserver une Excursion Nature
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Voir le Calendrier
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
