'use client';

import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { ChefHat, Fish, Utensils, Coffee } from 'lucide-react';

const gastronomyHighlights = [
  {
    icon: <Fish className="w-8 h-8" />,
    title: "Fruits de Mer Frais",
    description: "Poissons, langoustes, gambas, écrevisses et cigales de mer pêchés quotidiennement par les Xwlà et Kéta",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <ChefHat className="w-8 h-8" />,
    title: "Spécialités Béninoises",
    description: "Dakoin, Gboma, beignets de fromage Peul et tagliatelles aux écrevisses dans un cadre paisible",
    color: "from-orange-500 to-red-400"
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Transformation Artisanale",
    description: "Gari, tapioca, huile de palme rouge (Kolè et Zomi) et huile de coco préparés traditionnellement",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Sodabi Traditionnel",
    description: "Boisson locale artisanale et autres breuvages traditionnels du terroir béninois",
    color: "from-purple-500 to-pink-400"
  }
];

export default function GastronomieClient() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/Gastronomie/Crabe-et-Gari-scaled.jpg"
            className="absolute inset-0 w-full h-full"
            alt="Gastronomie locale de Grand-Popo"
            fallbackText="Gastronomie locale de Grand-Popo"
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
              Gastronomie Locale
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Goûtez aux spécialités de la région,
              <span className="text-orange-400"> produits frais et traditions culinaires</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gastronomy Highlights */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">
              Saveurs Authentiques
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez la richesse culinaire de Grand-Popo avec Manos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gastronomyHighlights.map((highlight, index) => (
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

      {/* Coming Soon Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12"
          >
            <ChefHat className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-playfair">
              Expériences Culinaires
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Manos prépare des expériences gastronomiques uniques : 
              cours de cuisine, visites de marchés locaux, et dégustations chez l'habitant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                Réserver une Expérience
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                En Savoir Plus
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
