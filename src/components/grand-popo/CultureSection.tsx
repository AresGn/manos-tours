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
    title: 'Tradition Vodun Authentique',
    description: 'Grand-Popo compte environ 30 ethnies avec des cultures spécifiques. L\'animisme et le Vodun sont les religions les plus populaires, avec quatre groupes de divinités : Xwla yêhoué, Guins vodoun, Etrons et Zangbétos.',
    image: '/images/culture/01-23.jpg',
    respectfulNote: 'Nos visites respectent scrupuleusement les traditions sacrées, guidées par les prêtres et gardiens locaux.',
    experiences: [
      'Découverte des temples de Dan et Gou',
      'Rencontre avec les prêtres traditionnels',
      'Visite de Hounsoukoè, "la rue des fétiches"',
      'Participation respectueuse aux cérémonies'
    ]
  },
  {
    id: 'musique',
    title: 'Rythme Agbadja Popo',
    description: 'La musique Xwla de Grand-Popo se distingue par le rythme Agbadja d\'origine ghanéenne, transmettant joie, tristesse et amour à travers des instruments traditionnels comme l\'Agbahoun et le Kpessi.',
    image: '/images/culture/01-26.jpg',
    respectfulNote: 'Nous collaborons avec les musiciens locaux pour préserver et partager cette richesse culturelle.',
    experiences: [
      'Initiation aux rythmes Agbadja',
      'Rencontre avec les artistes locaux',
      'Ateliers de percussion traditionnelle',
      'Spectacles de musique authentique'
    ]
  }
];

const festivals: Festival[] = [
  {
    id: 'voodoo-festival',
    name: 'Festival Vodun National',
    date: '10 Janvier',
    description: 'Célébration nationale de la tradition Vodun au Bénin, reconnue patrimoine mondial par l\'UNESCO.',
    significance: 'Grand-Popo accueille des milliers de visiteurs pour cette communion spirituelle exceptionnelle',
    image: '/images/culture/01-24.jpg',
    month: 1
  },
  {
    id: 'nonvitcha-festival',
    name: 'Fête de Nonvitcha',
    date: 'Période des récoltes',
    description: 'Fête populaire traditionnelle célébrant les récoltes et les divinités de la terre.',
    significance: 'Moment de gratitude envers la nature et de partage communautaire dans la tradition Xwlà',
    image: '/images/culture/P1103448.jpg',
    month: 8
  },
  {
    id: 'yeke-yeke',
    name: 'Yêkê-Yêkê',
    date: 'Calendrier traditionnel',
    description: 'Fête populaire colorée avec manifestations de Zangbéto dans les villages de Hêvê, Hakoè et Houndjohoundji.',
    significance: 'Célébration de l\'identité culturelle Xwlà avec danses et rituels ancestraux',
    image: '/images/culture/P8180542.jpg',
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
    <section ref={ref} className="py-20" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
            Culture Authentique
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez la richesse culturelle de Grand-Popo dans le respect
            et l'authenticité, guidé par les gardiens de ces traditions millénaires.
          </p>
        </motion.div>

        {/* Cultural Aspects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Traditions Vivantes</h3>
          
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl text-white'
                      : 'bg-white hover:bg-gray-50 shadow-md border border-gray-200'
                    }
                  `}
                  onClick={() => setSelectedAspect(aspect)}
                >
                  <h4 className={`text-2xl font-bold mb-3 ${selectedAspect.id === aspect.id ? 'text-white' : 'text-gray-900'}`}>{aspect.title}</h4>
                  <p className={`mb-4 ${selectedAspect.id === aspect.id ? 'text-white/90' : 'text-gray-600'}`}>{aspect.description}</p>
                  
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
                  src={selectedAspect.image}
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
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Calendrier des Festivals</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((festival, index) => (
              <motion.div
                key={festival.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className={`
                  bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200
                  ${festival.month === currentMonth ? 'ring-2 ring-yellow-400' : ''}
                `}
              >
                <div className="relative h-48">
                  <OptimizedImage
                    src={festival.image}
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
                  
                  <h4 className="text-xl font-bold mb-3 text-gray-900">{festival.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{festival.description}</p>
                  
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
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className="text-sm text-gray-600">{festival.significance}</p>
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
