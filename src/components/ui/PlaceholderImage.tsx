'use client';

import React from 'react';
import { Camera } from 'lucide-react';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 400,
  height = 300,
  text = "Image à venir",
  className = ""
}) => {
  return (
    <div 
      className={`bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="text-center text-gray-300">
        <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
        <p className="text-sm font-medium">{text}</p>
      </div>
    </div>
  );
};

export default PlaceholderImage;
