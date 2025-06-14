import React from 'react';
import { HeroSection, ManosGuideSection } from '@/components/sections/home';
import { Feature108Demo } from '@/components/ui/feature108-demo';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section Hero révolutionnaire */}
      <HeroSection />

      {/* Section Pourquoi Grand-Popo */}
      <Feature108Demo />

      {/* Section Manos, Votre Guide Expert */}
      <ManosGuideSection />

      {/* Section suivante (placeholder pour le développement futur) */}
      <section id="next-section" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Prochaine Section
          </h2>
          <p className="text-xl text-gray-600">
            Ici viendront les autres sections du site...
          </p>
        </div>
      </section>
    </main>
  );
}
