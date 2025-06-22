'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Crown, Ship } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface HistoryPeriod {
  id: string;
  period: string;
  title: string;
  description: string;
  details: string;
  historicalImage: string;
  modernImage: string;
  icon: React.ReactNode;
  color: string;
}

const historyPeriods: HistoryPeriod[] = [
  {
    id: 'precolonial',
    period: 'XVe - XIXe siècle',
    title: 'Royaume de Grand-Popo',
    description: 'Fondation du royaume par les peuples Goun, centre commercial majeur de la côte ouest-africaine.',
    details: 'Grand-Popo était un royaume prospère, contrôlant le commerce entre l\'intérieur du continent et les navires européens. Les rois de Grand-Popo étaient respectés pour leur diplomatie et leur sagesse commerciale.',
    historicalImage: 'placeholder',
    modernImage: 'placeholder',
    icon: <Crown className="w-6 h-6" />,
    color: 'from-yellow-600 to-orange-600'
  },
  {
    id: 'colonial',
    period: 'XIXe - XXe siècle',
    title: 'Période Coloniale',
    description: 'Arrivée des Européens, développement du port et transformation de la région.',
    details: 'L\'établissement colonial a transformé Grand-Popo en un port important pour le commerce triangulaire, puis en centre administratif. Cette période a laissé des traces architecturales encore visibles aujourd\'hui.',
    historicalImage: 'placeholder',
    modernImage: 'placeholder',
    icon: <Ship className="w-6 h-6" />,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'independence',
    period: '1960 - Aujourd\'hui',
    title: 'Indépendance et Renaissance',
    description: 'Indépendance du Bénin et développement du tourisme culturel et écologique.',
    details: 'Depuis l\'indépendance, Grand-Popo s\'est réinventée comme destination touristique authentique, préservant ses traditions tout en s\'ouvrant au monde moderne.',
    historicalImage: 'placeholder',
    modernImage: 'placeholder',
    icon: <Users className="w-6 h-6" />,
    color: 'from-green-600 to-emerald-600'
  }
];

const HistoryTimeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<HistoryPeriod>(historyPeriods[0]);
  const [showModern, setShowModern] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Histoire Vivante
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez l'évolution fascinante de Grand-Popo à travers les siècles, 
            des royaumes précoloniaux à la destination moderne d'aujourd'hui.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {historyPeriods.map((period, index) => (
              <motion.div
                key={period.id}
                className={`
                  relative p-6 rounded-xl cursor-pointer transition-all duration-300
                  ${selectedPeriod.id === period.id 
                    ? 'bg-gradient-to-r ' + period.color + ' shadow-xl scale-105' 
                    : 'bg-gray-800 hover:bg-gray-700'
                  }
                `}
                onClick={() => setSelectedPeriod(period)}
                whileHover={{ scale: selectedPeriod.id === period.id ? 1.05 : 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`
                    p-3 rounded-full 
                    ${selectedPeriod.id === period.id ? 'bg-white/20' : 'bg-gray-700'}
                  `}>
                    {period.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">{period.period}</span>
                    </div>
                    <h3 className="text-xl font-bold">{period.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300">{period.description}</p>
                
                {/* Timeline connector */}
                {index < historyPeriods.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-600"></div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Image Display with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                className="w-full h-full transition-opacity duration-500"
                alt={`${selectedPeriod.title} - ${showModern ? 'Moderne' : 'Historique'}`}
                fallbackText={`${selectedPeriod.title} - ${showModern ? 'Moderne' : 'Historique'}`}
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl font-bold mb-3">{selectedPeriod.title}</h4>
                  <p className="text-gray-200 leading-relaxed">{selectedPeriod.details}</p>
                </div>
              </div>
            </div>

            {/* Toggle Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowModern(!showModern)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                {showModern ? 'Voir l\'historique' : 'Voir aujourd\'hui'}
              </button>
            </div>

            {/* Period indicator */}
            <div className="mt-4 text-center">
              <span className="text-gray-400 text-sm">
                {showModern ? 'Vue moderne' : 'Vue historique'} • {selectedPeriod.period}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
