'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

interface OptimizedImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackText?: string;
  priority?: boolean;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackText,
  priority = false,
  quality = 85
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Use elephant image as default fallback
  const defaultImage = "https://images.pexels.com/photos/70080/elephant-mammal-animal-trunk-70080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const imageSrc = src || defaultImage;

  if (imageError) {
    return (
      <div 
        className={`bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-center text-gray-300">
          <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p className="text-sm font-medium">{fallbackText || alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      )}
      
      <Image
        src={imageSrc}
        alt={alt}
        fill={!width && !height}
        width={width}
        height={height}
        className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        priority={priority}
        quality={quality}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageError(true);
          setIsLoading(false);
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default OptimizedImage;
