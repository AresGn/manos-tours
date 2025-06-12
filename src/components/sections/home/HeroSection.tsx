"use client";

import React, { useState, useEffect } from 'react';
import VideoBackground from '@/components/ui/VideoBackground';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import { useBreakpoints } from '@/hooks/useMediaQuery';
import { HeroContent } from '@/lib/types';

const heroContent: HeroContent = {
  title: {
    en: "Discover Grand-Popo's Hidden Paradise",
    fr: "Découvrez le Paradis Caché de Grand-Popo"
  },
  subtitle: {
    en: "Where pristine beaches meet authentic culture, guided by local expertise",
    fr: "Où les plages vierges rencontrent la culture authentique, guidé par l'expertise locale"
  },
  cta: {
    en: "Start Your Journey",
    fr: "Commencez Votre Aventure"
  }
};

const HeroSection: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'en'>('fr');
  const [isLoaded, setIsLoaded] = useState(false);
  useBreakpoints();

  // Déclencher les animations après le montage
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Détection automatique de la langue (optionnel)
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
      setCurrentLanguage('en');
    }
  }, []);


  const handleCTAClick = () => {
    // Scroll vers la section Pourquoi Grand-Popo
    const nextSection = document.querySelector('#why-grand-popo');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section relative w-full h-screen overflow-hidden">
      {/* Vidéo d'arrière-plan */}
      <VideoBackground
        src="/videos/hero.mp4"
        className="absolute inset-0"
        overlay={true}
        overlayOpacity={0.3}
        muted={false}
        volume={0.3}
      />

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Titre principal avec animation CSS */}
          <h1
            className={`hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="block">
              {heroContent.title[currentLanguage]}
            </span>
          </h1>

          {/* Sous-titre */}
          <p
            className={`hero-subtitle text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {heroContent.subtitle[currentLanguage]}
          </p>

          {/* Bouton d'action principal */}
          <div
            className={`hero-actions flex items-center justify-center mb-16 md:mb-20 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            {/* CTA Principal */}
            <button
              onClick={handleCTAClick}
              className="hero-cta-primary bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              {heroContent.cta[currentLanguage]}
            </button>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement - en bas, séparé du bouton */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <ScrollIndicator />
      </div>


    </section>
  );
};

export default HeroSection;
