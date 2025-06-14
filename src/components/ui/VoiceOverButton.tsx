"use client";

import React, { useState } from 'react';

interface VoiceOverButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
}

const VoiceOverButton: React.FC<VoiceOverButtonProps> = ({
  text,
  className = "",
  disabled = true
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (disabled) return;

    // Fonctionnalité à implémenter dans le futur
    // Ici on pourrait utiliser l'API Web Speech ou un service audio
    // Pour l'instant, on simule juste la lecture
    console.log('Playing text:', text); // Utilisation du paramètre text
    setIsPlaying(true);

    // Simulation d'une lecture audio
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <button 
      onClick={handlePlay}
      disabled={disabled}
      className={`
        p-2 rounded-full transition-all duration-300 
        ${disabled 
          ? 'bg-gray-400 cursor-not-allowed opacity-50' 
          : 'bg-blue-600 hover:bg-blue-700 hover:scale-110'
        } 
        text-white shadow-lg
        ${className}
      `}
      title={disabled ? "Fonctionnalité à venir" : "Écouter la citation"}
      aria-label={disabled ? "Fonctionnalité audio à venir" : "Lire le texte à voix haute"}
    >
      {isPlaying ? (
        // Icône pause/stop
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ) : (
        // Icône play/speaker
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.846 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.846l3.537-3.816a1 1 0 011.617.816zM16 8a1 1 0 011 1v2a1 1 0 11-2 0V9a1 1 0 011-1z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M15.293 6.293a1 1 0 011.414 0 6.97 6.97 0 010 9.414 1 1 0 11-1.414-1.414 4.97 4.97 0 000-7.586 1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
};

export default VoiceOverButton;
