"use client"

import React, { useState, useEffect } from "react"
import { FeatureSteps } from "@/components/ui/feature-section"

const WhyGrandPopoFeatureSection: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'en'>('fr')

  // Détection automatique de la langue
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('en')) {
      setCurrentLanguage('en')
    }
  }, [])

  const content = {
    fr: {
      title: "Pourquoi Grand-Popo ?",
      subtitle: "Découvrez les trésors cachés du Sud-Ouest du Bénin",
      description: "Petite ville paradisiaque du Sud-Ouest du Bénin, Grand-Popo dispose de nombreux atouts naturels, culturels et historiques ! Laissez-vous tenter par ses magnifiques plages de sable fin bordées de cocotiers. Située entre la mer et le fleuve Mono, Grand-Popo est le lieu idéal pour explorer les mangroves en pirogue et observer le retour des pêcheurs. Découvrez également les anciens comptoirs coloniaux et assistez aux cérémonies vaudou dans cette destination de choix pour les amateurs de culture exotique et d'aventures authentiques.",
      features: [
        {
          step: "🏖️",
          title: "Plages Vierges",
          content: "Des kilomètres de plages de sable fin préservées, bordées de cocotiers majestueux où vous pourrez vous détendre et profiter du coucher de soleil sur l'océan Atlantique.",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
        },
        {
          step: "🌊",
          title: "Bouche du Roy",
          content: "L'endroit magique où le fleuve Mono rencontre l'océan Atlantique. Un spectacle naturel unique où vous pourrez naviguer en pirogue traditionnelle et observer la faune locale.",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
        },
        {
          step: "�",
          title: "Faune Sauvage",
          content: "Découvrez la richesse de la faune africaine dans les réserves naturelles proches de Grand-Popo. Une expérience inoubliable au cœur de la nature préservée.",
          image: "https://images.pexels.com/photos/70080/elephant-mammal-animal-trunk-70080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ]
    },
    en: {
      title: "Why Grand-Popo?",
      subtitle: "Discover the hidden treasures of Southwest Benin",
      description: "A small paradisiacal town in Southwest Benin, Grand-Popo boasts numerous natural, cultural and historical assets! Let yourself be tempted by its magnificent fine sand beaches lined with coconut trees. Located between the sea and the Mono river, Grand-Popo is the ideal place to explore the mangroves by canoe and observe the return of fishermen. Also discover the old colonial trading posts and attend voodoo ceremonies in this destination of choice for lovers of exotic culture and authentic adventures.",
      features: [
        {
          step: "🏖️",
          title: "Pristine Beaches",
          content: "Miles of untouched fine sand beaches, lined with majestic coconut trees where you can relax and enjoy the sunset over the Atlantic Ocean.",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
        },
        {
          step: "🌊",
          title: "Bouche du Roy",
          content: "The magical place where the Mono river meets the Atlantic Ocean. A unique natural spectacle where you can navigate by traditional canoe and observe local wildlife.",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
        },
        {
          step: "🐢",
          title: "Turtle Sanctuary",
          content: "Experience the unique opportunity to observe sea turtles in their natural habitat. Participate in protecting these endangered species during their nocturnal nesting.",
          image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    }
  }

  const currentContent = content[currentLanguage]

  return (
    <section id="why-grand-popo" className="py-0">
      {/* Description principale en haut */}
      <div
        className="py-16 text-white text-center relative"
        style={{
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
        }}
      >
        {/* Effet de vague en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-800 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-5xl mx-auto">
            {currentContent.description}
          </p>
        </div>
      </div>

      {/* Section avec le template animé */}
      <FeatureSteps 
        features={currentContent.features}
        title=""
        autoPlayInterval={4000}
        imageHeight="h-[400px]"
      />
    </section>
  )
}

export default WhyGrandPopoFeatureSection
