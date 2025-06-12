"use client";

import { useEffect, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollY = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollY, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  const observeElement = (element: Element | null) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  };

  return {
    isVisible,
    scrollY,
    scrollDirection,
    observeElement,
  };
}