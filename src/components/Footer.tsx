'use client';

import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    tr: {
      copyright: '© 2024 Muhammed Furkan Ardıç. Tüm hakları saklıdır.',
      made: 'Next.js ve TailwindCSS ile yapılmıştır.'
    },
    en: {
      copyright: '© 2024 Muhammed Furkan Ardıç. All rights reserved.',
      made: 'Made with Next.js and TailwindCSS.'
    }
  };

  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between">
        <p className="text-center text-sm text-muted-foreground">
          {content[language].copyright}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/furkanardicm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/furkanardicm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          {content[language].made}
        </p>
      </div>
    </footer>
  );
} 