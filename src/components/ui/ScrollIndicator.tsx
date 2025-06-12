"use client";

import React, { useState, useEffect } from 'react';
import { ScrollIndicatorProps } from '@/lib/types';

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  className = '',
  onClick
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Scroll vers la section suivante par défaut
      const nextSection = document.querySelector('#next-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Scroll d'une hauteur d'écran
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`scroll-indicator ${className} transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <button
        onClick={handleClick}
        className="flex items-center justify-center gap-3 px-6 py-3 text-white/90 hover:text-white transition-all duration-300 group cursor-pointer hover:scale-105 bg-black/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/20 hover:border-white/30"
        aria-label="Faire défiler vers le bas"
      >
        {/* Texte indicateur horizontal */}
        <span
          className={`text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${
            isVisible ? 'opacity-90' : 'opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Découvrir
        </span>

        {/* Icône flèche animée horizontale */}
        <div className="relative animate-bounce-slow">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ScrollIndicator;
