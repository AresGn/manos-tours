"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Users, Hotel, Leaf, MapPin, Calendar } from 'lucide-react';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

const ServicesSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      Icon: Users,
      name: "Excursions Privées & Groupes",
      description: "We offer a wide variety of different tours of popular tourist destinations around Benin and Togo in West Africa. You can book tours in English or French.",
      href: "/experiences",
      cta: "Découvrir nos tours",
      background: (
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
            alt="Groupe en excursion à Grand-Popo"
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Hotel,
      name: "Hébergements & Logements",
      description: "Accommodation can easily be booked for your stay. We have apartments, hotel options and camping gear available to suit your needs.",
      href: "/hebergements",
      cta: "Voir les hébergements",
      background: (
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&h=600"
            alt="Hébergement traditionnel au Bénin"
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Leaf,
      name: "Écotourisme & Tourisme Éthique",
      description: "Our focus is on ensuring that all our activities are good for our environment and the area. We work hard to make sure everything we do is as sustainable as possible.",
      href: "/ecotourisme",
      cta: "En savoir plus",
      background: (
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&h=600"
            alt="Nature et écotourisme au Bénin"
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: MapPin,
      name: "Expériences Sur-Mesure",
      description: "Create your perfect journey with our customizable experiences. From spiritual Vodun tours to culinary adventures, we design unique itineraries just for you.",
      href: "/experiences-sur-mesure",
      cta: "Créer mon voyage",
      background: (
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=600"
            alt="Expérience personnalisée au Bénin"
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Calendar,
      name: "Planification & Conseils",
      description: "Expert guidance for your trip planning. Get insider tips, weather updates, visa assistance, and personalized recommendations for the perfect Grand-Popo experience.",
      href: "/planifier",
      cta: "Planifier maintenant",
      background: (
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=600"
            alt="Planification de voyage"
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
  ];

  return (
    <section
      id="services"
      className="py-10 md:py-12 lg:py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre de la section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ce que nous{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              offrons
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Découvrez le Bénin et le Togo avec Manos Tours
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Bento Grid des services */}
        <div className={`transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
            {services.map((service) => (
              <BentoCard 
                key={service.name} 
                {...service}
                className={`${service.className} bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300`}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
