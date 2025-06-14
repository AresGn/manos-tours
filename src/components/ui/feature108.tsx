"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Feature108Props } from "./feature108.types";
import { defaultTabs } from "./feature108.data";
import { SkipLink } from "./feature108.accessibility";
import { TabNavigation } from "./feature108.navigation";

const Feature108 = ({
  heading = "Pourquoi Grand-Popo ?",
  description = "Petite ville paradisiaque du sud-ouest du Bénin, Grand-Popo dispose de nombreux atouts naturels, culturels et historiques ! Laissez-vous tenter par ses magnifiques plages de sable fin bordées de cocotiers. Située entre la mer et le fleuve Mono, Grand-Popo est le lieu idéal pour explorer les mangroves en pirogue et observer le retour des pêcheurs...",
  tabs = defaultTabs,
}: Feature108Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const currentTab = tabs.find(tab => tab.value === activeTab) || tabs[0];

  // Précharger toutes les images pour un changement d'onglet plus fluide
  useEffect(() => {
    tabs.forEach((tab) => {
      const img = new window.Image();
      img.src = tab.content.imageSrc;
    });
  }, [tabs]);
  return (
    <section
      id="pourquoi-grand-popo"
      className="py-16 md:py-24 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
      }}
      aria-labelledby="section-heading"
    >
      <SkipLink targetId="section-content">
        Aller au contenu principal
      </SkipLink>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 text-center mb-12 lg:mb-16">
          <h1
            id="section-heading"
            className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            {heading}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
            {description}
          </p>
        </div>

        {/* Navigation Section */}
        <div id="section-content">
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          {/* Tab Content */}
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content Section */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <Badge
                  variant="outline"
                  className="w-fit bg-blue-600/20 border-blue-400 text-blue-300 hover:bg-blue-600/30"
                >
                  {currentTab.content.badge}
                </Badge>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  {currentTab.content.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                  {currentTab.content.description}
                </p>
                <Button
                  className="mt-4 w-fit gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  size="lg"
                >
                  {currentTab.content.buttonText}
                </Button>
              </div>

              {/* Image Section */}
              <div className="order-1 lg:order-2">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                  <Image
                    src={currentTab.content.imageSrc}
                    alt={currentTab.content.imageAlt}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    priority={currentTab.value === tabs[0].value}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature108 };
