'use client';

import { useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll için CSS ayarı
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return <>{children}</>;
} 