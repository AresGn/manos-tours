'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface NatureSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ambientSound: string;
  highlights: string[];
  color: string;
}

const natureSlides: NatureSlide[] = [
  {
    id: 'plages',
    title: 'Plages Sauvages',
    subtitle: 'Côte Atlantique Préservée',
    description: 'Des kilomètres de plages vierges où les tortues marines viennent pondre sous les étoiles. Le sable doré s\'étend à perte de vue, caressé par les vagues de l\'Atlantique.',
    image: 'placeholder',
    ambientSound: 'placeholder',
    highlights: ['Ponte des tortues marines', 'Couchers de soleil spectaculaires', 'Plages privées et sauvages'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'mangroves',
    title: 'Mangroves Mystiques',
    subtitle: 'Écosystème Unique',
    description: 'Naviguez en pirogue traditionnelle à travers les canaux secrets des mangroves. Un monde aquatique où la nature règne en maître, refuge d\'une biodiversité exceptionnelle.',
    image: 'placeholder',
    ambientSound: 'placeholder',
    highlights: ['Navigation en pirogue', 'Observation des oiseaux', 'Écosystème préservé'],
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 'faune',
    title: 'Faune Exceptionnelle',
    subtitle: 'Biodiversité Remarquable',
    description: 'Découvrez une faune riche et variée : singes, oiseaux tropicaux, reptiles et mammifères marins. Chaque rencontre est un moment magique dans ce sanctuaire naturel.',
    image: 'placeholder',
    ambientSound: 'placeholder',
    highlights: ['Observation des primates', 'Oiseaux tropicaux', 'Mammifères marins'],
    color: 'from-orange-500 to-yellow-400'
  }
];

const NatureSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % natureSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Sound management
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    if (soundEnabled) {
      audioRef.current = new Audio(natureSlides[currentSlide].ambientSound);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        setSoundEnabled(false);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [currentSlide, soundEnabled]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % natureSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + natureSlides.length) % natureSlides.length);
  };

  const currentSlideData = natureSlides[currentSlide];

  return (
    <section ref={ref} className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">
            Nature Exceptionnelle
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immergez-vous dans les paysages époustouflants de Grand-Popo, 
            où chaque écosystème raconte une histoire unique.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Slider */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <OptimizedImage
                  className="absolute inset-0 w-full h-full"
                  alt={currentSlideData.title}
                  fallbackText={currentSlideData.title}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.color} opacity-30`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="p-8 md:p-12 text-white max-w-2xl"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2 font-playfair">
                  {currentSlideData.title}
                </h3>
                <p className="text-xl mb-4 text-yellow-300">
                  {currentSlideData.subtitle}
                </p>
                <p className="text-lg mb-6 leading-relaxed text-gray-200">
                  {currentSlideData.description}
                </p>
                
                {/* Highlights */}
                <div className="space-y-2">
                  {currentSlideData.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span className="text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
              </button>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
              >
                {soundEnabled ? <Volume2 className="w-5 h-5 text-white" /> : <VolumeX className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {natureSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === currentSlide ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NatureSlider;
