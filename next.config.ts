import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Configuration pour éviter les timeouts
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Timeout plus long pour les images externes
    unoptimized: false,
  },
  // Configuration ESLint pour le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuration pour améliorer les performances
  // experimental: {
  //   optimizeCss: true, // Désactivé temporairement car cause des problèmes avec critters
  // },
};

export default nextConfig;
