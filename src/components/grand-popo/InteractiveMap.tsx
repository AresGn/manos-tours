'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Camera, Waves, TreePine, Building } from 'lucide-react';

interface PointOfInterest {
  id: string;
  name: string;
  description: string;
  type: 'beach' | 'nature' | 'culture' | 'accommodation';
  x: number; // Position en pourcentage
  y: number; // Position en pourcentage
  icon: React.ReactNode;
}

const pointsOfInterest: PointOfInterest[] = [
  {
    id: 'bouche-du-roy',
    name: 'Bouche du Roy',
    description: 'Embouchure mystique où le fleuve Mono rencontre l\'océan Atlantique',
    type: 'nature',
    x: 45,
    y: 30,
    icon: <Waves className="w-4 h-4" />
  },
  {
    id: 'plage-tortues',
    name: 'Plage des Tortues',
    description: 'Site de ponte des tortues marines, expérience unique au lever du soleil',
    type: 'beach',
    x: 60,
    y: 25,
    icon: <Camera className="w-4 h-4" />
  },
  {
    id: 'mangroves',
    name: 'Mangroves',
    description: 'Écosystème préservé, navigation en pirogue traditionnelle',
    type: 'nature',
    x: 35,
    y: 45,
    icon: <TreePine className="w-4 h-4" />
  },
  {
    id: 'village-traditionnel',
    name: 'Village Traditionnel',
    description: 'Découverte de la culture Vodun et de l\'artisanat local',
    type: 'culture',
    x: 50,
    y: 60,
    icon: <Building className="w-4 h-4" />
  },
  {
    id: 'hotel-awale',
    name: 'Hôtel Awale Plage',
    description: 'Hébergement de charme face à l\'océan',
    type: 'accommodation',
    x: 65,
    y: 40,
    icon: <Building className="w-4 h-4" />
  }
];

const InteractiveMap = () => {
  const [selectedPoint, setSelectedPoint] = useState<PointOfInterest | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const getIconColor = (type: string) => {
    switch (type) {
      case 'beach': return 'text-yellow-400';
      case 'nature': return 'text-green-400';
      case 'culture': return 'text-purple-400';
      case 'accommodation': return 'text-blue-400';
      default: return 'text-white';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'beach': return 'Plage';
      case 'nature': return 'Nature';
      case 'culture': return 'Culture';
      case 'accommodation': return 'Hébergement';
      default: return '';
    }
  };

  return (
    <div className="bg-gray-800/90 backdrop-blur-sm p-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-white text-2xl font-bold mb-4 text-center">
          Points d'Intérêt à Grand-Popo
        </h3>
        
        <div className="relative">
          {/* Map Container */}
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-900 to-green-900 rounded-xl overflow-hidden border-2 border-gray-600">
            {/* Simplified map background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-blue-600"></div>
              <div className="absolute bottom-0 left-0 w-full h-2/3 bg-green-800"></div>
            </div>
            
            {/* Points of Interest */}
            {pointsOfInterest.map((point) => (
              <motion.div
                key={point.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setHoveredPoint(point.id)}
                onHoverEnd={() => setHoveredPoint(null)}
                onClick={() => setSelectedPoint(point)}
              >
                <div className={`
                  w-8 h-8 rounded-full border-2 border-white flex items-center justify-center
                  ${getIconColor(point.type)} bg-gray-800/80 backdrop-blur-sm
                  ${hoveredPoint === point.id ? 'ring-4 ring-white/50' : ''}
                  transition-all duration-300
                `}>
                  {point.icon}
                </div>
                
                {/* Pulse animation */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {['beach', 'nature', 'culture', 'accommodation'].map((type) => (
              <div key={type} className="flex items-center gap-2 text-white">
                <div className={`w-4 h-4 rounded-full ${getIconColor(type)} bg-gray-800 border border-white`}></div>
                <span className="text-sm">{getTypeLabel(type)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Point Details */}
        <AnimatePresence>
          {selectedPoint && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 bg-gray-700 rounded-xl p-6 text-white"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold mb-2">{selectedPoint.name}</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getIconColor(selectedPoint.type)} bg-gray-800`}>
                    {getTypeLabel(selectedPoint.type)}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPoint(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-300 mb-4">{selectedPoint.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                En savoir plus
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveMap;
