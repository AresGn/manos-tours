"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import VoiceOverButton from '@/components/ui/VoiceOverButton';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = ""
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);

      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function simple mais efficace
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end); // Valeur finale exacte
        }
      };

      // Démarrer immédiatement
      requestAnimationFrame(animate);
    }
  }, [isInView, hasStarted, end, duration]);

  return (
    <span
      ref={ref}
      className="font-bold text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300"
    >
      {prefix}{count}{suffix}
    </span>
  );
};

const ManosGuideSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      number: 200,
      suffix: "+",
      label: "Tours Guidés",
      description: "Expériences uniques partagées",
      icon: "🎯"
    },
    {
      number: 50,
      suffix: "+",
      label: "Destinations",
      description: "Sites secrets révélés",
      icon: "🗺️"
    },
    {
      number: 15,
      label: "Ans d'Expérience",
      description: "Au service du tourisme authentique",
      icon: "⭐"
    }
  ];

  return (
    <section
      id="manos-guide-expert"
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
      }}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre de la section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Manos, Votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Guide Expert
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Section principale : Image + Texte selon le schéma */}
        <div className="manos-main-layout mb-16">

          {/* Section Image - Gauche (Photo rectangulaire verticale) */}
          <div className={`manos-photo-section transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative group">
              {/* Image principale - Format rectangulaire vertical */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0 h-[500px] md:h-[600px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
                  alt="Manos, guide expert de Grand-Popo en action"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                {/* Overlay gradient amélioré */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>

                {/* Badge de certification flottant */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-2 rounded-full shadow-lg border-2 border-white">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">✓</span>
                    <span className="text-xs font-bold">Guide Certifié</span>
                  </div>
                </div>
              </div>

              {/* Badge de note flottant amélioré */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="text-lg font-bold flex items-center gap-1">
                    ⭐ 4.9
                  </div>
                  <div className="text-xs opacity-90">+150 avis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Contenu - Droite (Texte descriptif + Citation) */}
          <div className={`manos-content-section transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>

            {/* Citation inspirante avec design amélioré et option voix-off */}
            <div className="mb-8 lg:mb-12">
              <blockquote className="relative text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-8 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-l-4 border-blue-400 group">
                <div className="absolute -top-3 -left-3 text-4xl text-blue-400 opacity-70">&ldquo;</div>
                <p className="relative z-10 text-white font-medium">
                  Chaque voyage est une histoire unique. Mon rôle est de vous faire vivre
                  l&apos;âme authentique de Grand-Popo, loin des sentiers battus.
                </p>
                <div className="absolute -bottom-3 -right-3 text-4xl text-blue-400 opacity-70 rotate-180">&rdquo;</div>

                {/* Bouton voix-off (optionnel pour le futur) */}
                <VoiceOverButton
                  text="Chaque voyage est une histoire unique. Mon rôle est de vous faire vivre l'âme authentique de Grand-Popo, loin des sentiers battus."
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  disabled={true}
                />

                {/* Attribution */}
                <footer className="mt-6 text-base font-semibold text-blue-300 not-italic">
                  — Manos, Guide Expert depuis 2009
                </footer>
              </blockquote>

              {/* Description personnelle */}
              <div className="space-y-6">
                <p className="text-xl text-gray-200 leading-relaxed">
                  <span className="font-bold text-blue-400">Natif de Grand-Popo</span>, je partage ma passion pour cette région exceptionnelle
                  depuis plus de 15 ans. Ma connaissance intime du territoire, de ses traditions et de ses habitants
                  me permet de vous offrir une expérience authentique et respectueuse.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Découvrez avec moi les secrets les mieux gardés de notre patrimoine naturel et culturel,
                  des plages vierges aux cérémonies traditionnelles, en passant par la gastronomie locale
                  et les rencontres humaines inoubliables.
                </p>
              </div>
            </div>

            {/* Bouton CTA amélioré */}
            <div className={`transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <span className="mr-2">Découvrir Mon Histoire</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Section Statistiques - Placée sous l'image et le texte */}
        <div className={`transition-all duration-1000 delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="manos-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 delay-${(index + 1) * 100} border border-white/20 hover:border-blue-400/50 hover:bg-white/15 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Icône */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Compteur animé */}
                <div className="mb-4">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix || ""}
                    duration={2500 + index * 300}
                  />
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {stat.description}
                </p>

                {/* Barre de progression décorative */}
                <div className="mt-4 w-full bg-white/20 rounded-full h-1 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-1000 delay-1000"
                    style={{
                      width: isLoaded ? `${Math.min((stat.number / 200) * 100, 100)}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManosGuideSection;
