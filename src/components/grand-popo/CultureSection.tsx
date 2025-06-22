'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Heart, Star, ChevronDown, ChevronUp } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface CulturalAspect {
  id: string;
  title: string;
  description: string;
  image: string;
  respectfulNote: string;
  experiences: string[];
}

interface Festival {
  id: string;
  name: string;
  date: string;
  description: string;
  significance: string;
  image: string;
  month: number;
}

const culturalAspects: CulturalAspect[] = [
  {
    id: 'vodun',
    title: 'Tradition Vodun',
    description: 'Le Vodun est une religion ancestrale riche en sagesse et en spiritualité, profondément respectée à Grand-Popo. Cette tradition millénaire unit les communautés dans le respect des ancêtres et de la nature.',
    image: 'placeholder',
    respectfulNote: 'Nos visites sont menées avec le plus grand respect, en collaboration avec les guides spirituels locaux.',
    experiences: [
      'Visite respectueuse des temples sacrés',
      'Rencontre avec les gardiens de la tradition',
      'Découverte de l\'artisanat rituel',
      'Participation aux cérémonies ouvertes'
    ]
  },
  {
    id: 'artisanat',
    title: 'Artisanat Traditionnel',
    description: 'L\'artisanat de Grand-Popo reflète des siècles de savoir-faire transmis de génération en génération. Chaque pièce raconte une histoire, chaque motif a sa signification.',
    image: 'placeholder',
    respectfulNote: 'Nous soutenons directement les artisans locaux et leurs familles.',
    experiences: [
      'Ateliers de tissage traditionnel',
      'Sculpture sur bois avec les maîtres',
      'Poterie selon les techniques ancestrales',
      'Création de bijoux symboliques'
    ]
  }
];

const festivals: Festival[] = [
  {
    id: 'voodoo-festival',
    name: 'Festival Vodun',
    date: '10 Janvier',
    description: 'Célébration nationale de la tradition Vodun, reconnue patrimoine mondial.',
    significance: 'Moment de communion spirituelle et de fierté culturelle',
    image: 'placeholder',
    month: 1
  },
  {
    id: 'yam-festival',
    name: 'Fête de l\'Igname',
    date: 'Août - Septembre',
    description: 'Célébration des récoltes et remerciements aux divinités de la terre.',
    significance: 'Gratitude envers la nature et partage communautaire',
    image: 'placeholder',
    month: 8
  },
  {
    id: 'fishing-festival',
    name: 'Festival des Pêcheurs',
    date: 'Mars',
    description: 'Bénédiction des filets et des pirogues pour une pêche abondante.',
    significance: 'Harmonie entre l\'homme et l\'océan',
    image: 'placeholder',
    month: 3
  }
];

const CultureSection = () => {
  const [selectedAspect, setSelectedAspect] = useState<CulturalAspect>(culturalAspects[0]);
  const [expandedFestival, setExpandedFestival] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentMonth = new Date().getMonth() + 1;

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Culture Authentique
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez la richesse culturelle de Grand-Popo dans le respect 
            et l'authenticité, guidé par les gardiens de ces traditions millénaires.
          </p>
        </motion.div>

        {/* Cultural Aspects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Traditions Vivantes</h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Aspect Selection */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {culturalAspects.map((aspect) => (
                <div
                  key={aspect.id}
                  className={`
                    p-6 rounded-xl cursor-pointer transition-all duration-300
                    ${selectedAspect.id === aspect.id 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl' 
                      : 'bg-gray-800 hover:bg-gray-700'
                    }
                  `}
                  onClick={() => setSelectedAspect(aspect)}
                >
                  <h4 className="text-2xl font-bold mb-3">{aspect.title}</h4>
                  <p className="text-gray-300 mb-4">{aspect.description}</p>
                  
                  {selectedAspect.id === aspect.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-white/20"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="w-5 h-5 text-pink-300" />
                        <span className="text-sm font-semibold text-pink-300">Approche Respectueuse</span>
                      </div>
                      <p className="text-sm text-gray-200 mb-4">{aspect.respectfulNote}</p>
                      
                      <div className="space-y-2">
                        {aspect.experiences.map((experience, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm">{experience}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Image Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  className="w-full h-full"
                  alt={selectedAspect.title}
                  fallbackText={selectedAspect.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h5 className="text-xl font-bold mb-2">{selectedAspect.title}</h5>
                  <p className="text-sm text-gray-200">Expérience authentique et respectueuse</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Festivals Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Calendrier des Festivals</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((festival, index) => (
              <motion.div
                key={festival.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className={`
                  bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl
                  ${festival.month === currentMonth ? 'ring-2 ring-yellow-400' : ''}
                `}
              >
                <div className="relative h-48">
                  <OptimizedImage
                    className="w-full h-full"
                    alt={festival.name}
                    fallbackText={festival.name}
                  />
                  {festival.month === currentMonth && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                      Ce mois-ci !
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-semibold">{festival.date}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3">{festival.name}</h4>
                  <p className="text-gray-300 text-sm mb-4">{festival.description}</p>
                  
                  <button
                    onClick={() => setExpandedFestival(
                      expandedFestival === festival.id ? null : festival.id
                    )}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="text-sm">En savoir plus</span>
                    {expandedFestival === festival.id ? 
                      <ChevronUp className="w-4 h-4" /> : 
                      <ChevronDown className="w-4 h-4" />
                    }
                  </button>
                  
                  {expandedFestival === festival.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-gray-700"
                    >
                      <p className="text-sm text-gray-300">{festival.significance}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Découvrir nos expériences culturelles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureSection;
