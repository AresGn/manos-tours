"use client";

import React, { useRef, useEffect, useState } from 'react';
import { VideoBackgroundProps } from '@/lib/types';

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  poster,
  className = '',
  overlay = true,
  overlayOpacity = 0.4,
  muted = false,
  volume = 0.3,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      setShowFallback(false);
      // Configurer le volume
      if (!muted) {
        video.volume = volume;
      }
      // Assurer la lecture automatique avec un délai
      setTimeout(() => {
        video.play().catch((error) => {
          console.warn('Autoplay failed:', error);
          // Si l'autoplay échoue, on affiche quand même la vidéo
          setIsLoaded(true);
        });
      }, 100);
    };

    const handleError = () => {
      setHasError(true);
      console.error('Video failed to load');
    };

    const handleLoadStart = () => {
      console.log('Video loading started');
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);

    // Forcer le chargement
    video.load();

    // Timeout pour masquer le fallback après 3 secondes
    const fallbackTimeout = setTimeout(() => {
      setShowFallback(false);
    }, 3000);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <div className={`video-background ${className}`}>
      {/* Fallback immédiat avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" />

      {/* Vidéo d'arrière-plan */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          minWidth: '100%',
          minHeight: '100%'
        }}
        autoPlay
        muted={muted}
        loop
        playsInline
        poster={poster}
        preload="metadata"
        controls={false}
        disablePictureInPicture
        style={{ pointerEvents: 'none' }}
      >
        <source src={src} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>

      {/* Image de fallback si la vidéo ne charge pas */}
      {hasError && poster && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black transition-opacity duration-1000"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Gradient décoratif pour un effet plus cinématographique */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      
      {/* Loading state simplifié - affiché seulement pendant les 3 premières secondes */}
      {showFallback && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-pulse text-2xl mb-2">🌊</div>
            <p className="text-lg font-light">Chargement...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
