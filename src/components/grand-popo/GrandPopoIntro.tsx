'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import RealOpenStreetMap from './RealOpenStreetMap';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { MapPin, Users, Camera } from 'lucide-react';

const quickLinks = [
  {
    title: 'Plages & Nature',
    description: 'Découvrez 30 km de plages sauvages, la Bouche du Roy et les mangroves d\'Avlo',
    href: '/grand-popo/plages',
    icon: <Camera className="w-6 h-6" />,
    color: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Gastronomie Locale',
    description: 'Fruits de mer frais, sodabi traditionnel et spécialités béninoises authentiques',
    href: '/grand-popo/gastronomie',
    icon: <Users className="w-6 h-6" />,
    color: 'from-orange-600 to-red-600'
  },
  {
    title: 'Hébergements',
    description: 'Hôtels de charme, Villa Sonnenblume et séjours chez l\'habitant Xwlà',
    href: '/grand-popo/hebergements',
    icon: <MapPin className="w-6 h-6" />,
    color: 'from-green-600 to-emerald-600'
  }
];

export default function GrandPopoIntro() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/hero-poster.jpg"
            className="absolute inset-0 w-full h-full"
            alt="Vue panoramique de Grand-Popo"
            fallbackText="Vue panoramique de Grand-Popo"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Grand-Popo
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              La "perle du sud-ouest béninois",<br />
              <span className="text-yellow-400 font-semibold">où l&apos;histoire rencontre l&apos;océan</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-12"
            >
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Découvrez cette commune de 57 636 habitants avec Manos, votre guide expert local.
                Explorez le royaume Xwlà, les traditions vodoun et 30 km de plages sauvages.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">
              Explorez Grand-Popo
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explorez les 44 villages de la commune, de la Bouche du Roy aux temples vodoun sur la vraie carte OpenStreetMap
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <RealOpenStreetMap />
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">
              Découvrez aussi...
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explorez les autres facettes de Grand-Popo avec Manos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link href={link.href}>
                  <div className={`
                    bg-gradient-to-br ${link.color} p-6 rounded-xl shadow-xl
                    transition-all duration-300 hover:shadow-2xl
                    border border-white/10 hover:border-white/20
                  `}>
                    <div className="text-white mb-4">
                      {link.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
