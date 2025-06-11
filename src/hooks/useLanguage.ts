"use client";

import { useState, useEffect } from 'react';

export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

export const languages: Language[] = [
  {
    code: 'fr',
    name: 'Français',
    nativeName: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  }
];

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('fr');

  // Charger la langue depuis le localStorage au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('manos-tours-language');
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Détecter la langue du navigateur
      const browserLanguage = navigator.language.split('-')[0];
      const supportedLanguage = languages.find(lang => lang.code === browserLanguage);
      if (supportedLanguage) {
        setCurrentLanguage(supportedLanguage.code);
      }
    }
  }, []);

  // Sauvegarder la langue dans le localStorage quand elle change
  useEffect(() => {
    localStorage.setItem('manos-tours-language', currentLanguage);
    // Ici vous pouvez ajouter d'autres logiques comme changer la langue de l'application
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = (languageCode: string) => {
    if (languages.some(lang => lang.code === languageCode)) {
      setCurrentLanguage(languageCode);
      
      // Ici vous pouvez ajouter la logique pour:
      // - Changer les textes de l'interface
      // - Rediriger vers la version traduite
      // - Mettre à jour le contexte i18n
      // - etc.
      
      console.log(`Langue changée vers: ${languageCode}`);
    }
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  const getOtherLanguages = () => {
    return languages.filter(lang => lang.code !== currentLanguage);
  };

  return {
    currentLanguage,
    changeLanguage,
    getCurrentLanguage,
    getOtherLanguages,
    languages
  };
}
