'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

interface MapPoint {
  id: string;
  name: string;
  description: string;
  type: 'attraction' | 'accommodation' | 'restaurant' | 'beach';
  icon: React.ReactNode;
}

const mapPoints: MapPoint[] = [
  {
    id: 'bouche-du-roy',
    name: 'Bouche du Roy',
    description: 'Embouchure du fleuve Mono dans l\'océan Atlantique',
    type: 'attraction',
    icon: <Navigation className="w-4 h-4" />
  },
  {
    id: 'plage-tortues',
    name: 'Plage des Tortues',
    description: 'Site de ponte des tortues marines',
    type: 'beach',
    icon: <MapPin className="w-4 h-4" />
  },
  {
    id: 'centre-ville',
    name: 'Centre-ville Grand-Popo',
    description: 'Cœur historique de la ville',
    type: 'attraction',
    icon: <Compass className="w-4 h-4" />
  }
];

const RealOpenStreetMap = () => {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);

  const getPointColor = (type: string) => {
    switch (type) {
      case 'attraction': return 'bg-blue-500';
      case 'beach': return 'bg-yellow-500';
      case 'accommodation': return 'bg-green-500';
      case 'restaurant': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'attraction': return 'Attraction';
      case 'beach': return 'Plage';
      case 'accommodation': return 'Hébergement';
      case 'restaurant': return 'Restaurant';
      default: return 'Point d\'intérêt';
    }
  };

  return (
    <div className="w-full bg-gray-800 rounded-xl overflow-hidden relative">
      {/* Map Container with Real OpenStreetMap */}
      <div className="relative">
        {/* OpenStreetMap Iframe */}
        <div className="w-full h-96 relative">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.5710449218750002%2C6.178102278679818%2C2.0379638671875004%2C6.541149119044767&amp;layer=mapnik"
            style={{ border: 'none' }}
            title="Carte de Grand-Popo"
            className="rounded-xl"
          />
          
          {/* Overlay with controls */}
          <div className="absolute top-4 right-4 bg-white/90 rounded-full p-3 shadow-lg">
            <Compass className="w-6 h-6 text-gray-700" />
          </div>
          
          {/* Scale indicator */}
          <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded-lg shadow-lg">
            <div className="text-xs text-gray-700 font-semibold">Grand-Popo, Bénin</div>
            <div className="text-xs text-gray-500">6°17'N, 1°49'E</div>
          </div>

          {/* Link to full map */}
          <div className="absolute bottom-4 right-4">
            <a 
              href="https://www.openstreetmap.org/?#map=11/6.3597/1.8045"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-300 flex items-center gap-2 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Carte complète
            </a>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="p-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h4 className="font-bold text-white mb-4 text-center">Points d'Intérêt à Grand-Popo</h4>
          
          {/* Points of Interest Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mapPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  bg-gray-700 rounded-lg p-4 cursor-pointer transition-all duration-300
                  hover:bg-gray-600 hover:scale-105
                  ${selectedPoint?.id === point.id ? 'ring-2 ring-blue-500 bg-gray-600' : ''}
                `}
                onClick={() => setSelectedPoint(selectedPoint?.id === point.id ? null : point)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`
                    w-8 h-8 rounded-full border-2 border-white flex items-center justify-center
                    ${getPointColor(point.type)} text-white
                  `}>
                    {point.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{point.name}</h5>
                    <span className={`text-xs px-2 py-1 rounded-full ${getPointColor(point.type)} text-white`}>
                      {getTypeLabel(point.type)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Legend for map colors */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {['attraction', 'beach', 'accommodation', 'restaurant'].map((type) => (
              <div key={type} className="flex items-center gap-2 text-white">
                <div className={`w-4 h-4 rounded-full ${getPointColor(type)}`}></div>
                <span className="text-sm">{getTypeLabel(type)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected point details */}
      {selectedPoint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-600 p-4 text-white"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-start">
              <div>
                <h5 className="font-bold text-lg mb-1">{selectedPoint.name}</h5>
                <p className="text-blue-100 mb-2">{selectedPoint.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
                  {getTypeLabel(selectedPoint.type)}
                </span>
              </div>
              <button
                onClick={() => setSelectedPoint(null)}
                className="text-blue-200 hover:text-white transition-colors text-xl"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RealOpenStreetMap;
