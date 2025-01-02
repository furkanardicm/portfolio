'use client';

import { useLanguage } from '@/lib/context/language';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export default function Navbar() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Admin sayfalarında navbar'ı gizle
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const content = {
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      blog: 'Blog',
      contact: 'İletişim',
    },
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
  };

  const links = [
    { href: '/', label: content[language].home },
    { href: '/about', label: content[language].about },
    { href: '/projects', label: content[language].projects },
    { href: '/blog', label: content[language].blog },
    { href: '/contact', label: content[language].contact },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-[1400px] mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo veya Site Başlığı */}
          <div className="md:flex-1">
            <Link href="/" className="text-xl font-bold">
              Portfolio
            </Link>
          </div>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-4 text-sm font-medium transition-colors hover:text-foreground ${
                  isActive(link.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Tema ve Dil Değiştirme */}
          <div className="flex items-center space-x-4 md:flex-1 md:justify-end">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        {/* Mobil Menü */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 text-sm rounded-md ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
} 