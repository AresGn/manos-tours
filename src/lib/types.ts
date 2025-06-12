// Types pour Manos Tours

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface HeroContent {
  title: {
    en: string;
    fr: string;
  };
  subtitle: {
    en: string;
    fr: string;
  };
  cta: {
    en: string;
    fr: string;
  };
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}

export interface ScrollIndicatorProps {
  className?: string;
  onClick?: () => void;
}

export interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  muted?: boolean;
  volume?: number;
}