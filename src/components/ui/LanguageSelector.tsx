"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface LanguageSelectorProps {
  className?: string;
}

export default function LanguageSelector({
  className = ""
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { getCurrentLanguage, getOtherLanguages, changeLanguage } = useLanguage();

  const currentLang = getCurrentLanguage();
  const otherLanguages = getOtherLanguages();

  const handleLanguageChange = (langCode: string) => {
    setIsOpen(false);
    changeLanguage(langCode);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
          className.includes('mobile-dark')
            ? 'gap-3 px-4 py-2 bg-gray-700 hover:bg-blue-600 border-2 border-gray-600 text-white w-full justify-center shadow-lg'
            : className.includes('w-full')
            ? 'gap-3 px-4 py-2 bg-white hover:bg-blue-50 border-2 border-blue-300 text-blue-800 w-full justify-center shadow-lg'
            : className.includes('language-selector-desktop')
            ? 'gap-1 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl justify-center'
            : 'gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl'
        }`}
        aria-label={`Langue actuelle: ${currentLang.name}`}
        aria-expanded={isOpen}
      >
        <span className="text-2xl" role="img" aria-label={`Drapeau ${currentLang.name}`}>
          {currentLang.flag}
        </span>
        {/* Afficher le texte seulement sur mobile */}
        {className.includes('mobile-dark') && (
          <span className="font-bold text-sm text-white">
            {currentLang.name}
          </span>
        )}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${
            className.includes('mobile-dark')
              ? 'text-white'
              : 'text-white'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <>
          {/* Overlay pour fermer le menu */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu */}
          <div className={`absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[80px] py-2 z-20 animate-in slide-in-from-top-2 duration-200 ${
            className.includes('w-full') || className.includes('mobile-dark') ? 'left-0 right-0 min-w-[140px]' : 'right-0'
          }`}>
            {otherLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center justify-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 focus:outline-none focus:bg-blue-50 focus:text-blue-700 ${
                  className.includes('w-full') || className.includes('mobile-dark') ? '' : 'justify-center'
                }`}
                aria-label={`Changer vers ${language.name}`}
              >
                <span className="text-xl" role="img" aria-label={`Drapeau ${language.name}`}>
                  {language.flag}
                </span>
                {/* Afficher le nom seulement sur mobile */}
                {(className.includes('w-full') || className.includes('mobile-dark')) && (
                  <span className="font-medium text-sm">
                    {language.name}
                  </span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
