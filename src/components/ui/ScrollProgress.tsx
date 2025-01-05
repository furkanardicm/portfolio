'use client';

import { useScroll, motion, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div className="fixed top-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-30 hidden md:block pointer-events-none shadow-lg shadow-blue-500/20"
      style={{ scaleX }}
    />
  );
} 