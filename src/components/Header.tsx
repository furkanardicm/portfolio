'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/context/language';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const content = {
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      blog: 'Blog',
      contact: 'İletişim',
      language: 'EN'
    },
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
      language: 'TR'
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              {content[language].home}
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              {content[language].about}
            </Link>
            <Link
              href="/projects"
              className="text-foreground hover:text-primary transition-colors"
            >
              {content[language].projects}
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary transition-colors"
            >
              {content[language].blog}
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              {content[language].contact}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {content[language].language}
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
} 