'use client';

import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Sayfa Bulunamadı',
      description: 'Aradığınız sayfa bulunamadı veya taşınmış olabilir.',
      button: 'Ana Sayfaya Dön'
    },
    en: {
      title: 'Page Not Found',
      description: 'The page you are looking for could not be found or may have been moved.',
      button: 'Back to Home'
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">{content[language].title}</h2>
        <p className="text-muted-foreground mb-8">{content[language].description}</p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-sm font-medium shadow transition-colors hover:bg-primary/90"
        >
          {content[language].button}
        </Link>
      </motion.div>
    </main>
  );
} 