import React from 'react';
import { HeroSection, ManosGuideSection, FAQSection } from '@/components/sections/home';
import { Feature108Demo } from '@/components/ui/feature108-demo';
import { PremiumTestimonials } from '@/components/ui/premium-testimonials';
import ServicesSection from '@/components/sections/home/ServicesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section Hero révolutionnaire */}
      <HeroSection />

      {/* Section Pourquoi Grand-Popo */}
      <Feature108Demo />

      {/* Section Manos, Votre Guide Expert */}
      <ManosGuideSection />

      {/* Section Ce que nous offrons */}
      <ServicesSection />

      {/* Section Témoignages */}
      <PremiumTestimonials />

      {/* Section FAQ */}
      <FAQSection />
    </main>
  );
}
