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
  const [isMuted, setIsMuted] = useState(muted);
  const [currentVolume, setCurrentVolume] = useState(volume);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      setShowFallback(false);
      // Configurer le volume
      if (!isMuted) {
        video.volume = currentVolume;
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
  }, [muted, volume]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      setIsMuted(!isMuted);
      video.muted = !isMuted;
      if (!isMuted) {
        video.volume = currentVolume;
      }
    }
  };

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
          minHeight: '100%',
          pointerEvents: 'none'
        }}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        poster={poster}
        preload="metadata"
        controls={false}
        disablePictureInPicture
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

      {/* Contrôles audio flottants */}
      {!muted && (
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
          style={{ pointerEvents: 'auto' }}
          aria-label={isMuted ? "Activer le son" : "Couper le son"}
        >
          {isMuted ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.846 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.846l3.537-3.816a1 1 0 011.617.816zM16 8a1 1 0 011 1v2a1 1 0 11-2 0V9a1 1 0 011-1z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M15.293 6.293a1 1 0 011.414 0 6.97 6.97 0 010 9.414 1 1 0 11-1.414-1.414 4.97 4.97 0 000-7.586 1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.846 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.846l3.537-3.816a1 1 0 011.617.816zM7 7.414L4.586 9H2v2h2.586L7 12.586V7.414z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      )}
      
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
