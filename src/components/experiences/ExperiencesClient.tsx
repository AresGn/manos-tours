'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Sunrise, 
  Waves, 
  Heart, 
  ChefHat, 
  Users, 
  Clock, 
  Star,
  ArrowRight,
  MapPin,
  Camera
} from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ExperienceConfigurator from './ExperienceConfigurator';
import SignatureExperiences from './SignatureExperiences';

export default function ExperiencesClient() {
  const [activeTab, setActiveTab] = useState('configurator');

  const experienceCategories = [
    {
      id: 'private-tours',
      title: 'Tours Privés & Groupes',
      description: 'Expériences personnalisées avec guide dédié',
      icon: <Users className="w-8 h-8" />,
      href: '/experiences/tours-prives',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'custom',
      title: 'Expériences Sur-Mesure',
      description: 'Créez votre aventure unique à Grand-Popo',
      icon: <Heart className="w-8 h-8" />,
      href: '/experiences/sur-mesure',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'ecotourism',
      title: 'Écotourisme & Éthique',
      description: 'Tourisme responsable et préservation',
      icon: <Camera className="w-8 h-8" />,
      href: '/experiences/ecotourisme',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'packages',
      title: 'Packages Complets',
      description: 'Séjours tout inclus clés en main',
      icon: <Star className="w-8 h-8" />,
      href: '/experiences/packages',
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/hero-poster.jpg"
            className="absolute inset-0 w-full h-full"
            alt="Expériences authentiques à Grand-Popo"
            fallbackText="Expériences authentiques à Grand-Popo"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Vos Aventures
            <span className="block text-yellow-400">Sur-Mesure</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-8 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Créez votre expérience unique à Grand-Popo,
            <span className="text-cyan-400"> guidé par l'expertise locale de Manos</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => setActiveTab('configurator')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Configurez Votre Expérience
            </button>
            <button 
              onClick={() => setActiveTab('signature')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Star className="w-5 h-5" />
              Expériences Signature
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-xl border border-gray-600/50">
              <button
                onClick={() => setActiveTab('configurator')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'configurator'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-700/50'
                }`}
              >
                Configurateur
              </button>
              <button
                onClick={() => setActiveTab('signature')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'signature'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-700/50'
                }`}
              >
                Expériences Signature
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'configurator' && <ExperienceConfigurator />}
            {activeTab === 'signature' && <SignatureExperiences />}
          </div>
        </div>
      </section>

      {/* Experience Categories */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.98) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">
              Explorez Nos Catégories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez toutes nos offres d'expériences organisées par thématiques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-600/50 hover:border-blue-400/60">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}>
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.title}
                  </h3>

                  <p className="text-gray-300 mb-6 flex-grow">
                    {category.description}
                  </p>

                  <button className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300">
                    Découvrir
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
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
              Prêt pour Votre Aventure ?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Contactez Manos pour créer ensemble l'expérience parfaite 
              qui correspondra exactement à vos envies et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Demander un Devis
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Appeler Manos
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
