'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/context/language';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import LanguageToggle from '../ui/LanguageToggle';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { language } = useLanguage();
  const { theme, setTheme, systemTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      blog: 'Blog',
      contact: 'İletişim'
    },
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact'
    }
  };

  const navLinks = [
    { href: '/', label: content[language].home },
    { href: '/about', label: content[language].about },
    { href: '/projects', label: content[language].projects },
    { href: '/blog', label: content[language].blog },
    { href: '/contact', label: content[language].contact },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <nav className="flex flex-1 items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md",
                  isActive(link.href) && "bg-muted text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className={cn(
            "fixed inset-0 top-16 bg-background/95 backdrop-blur-sm border-b z-50 lg:hidden",
            isOpen ? "block" : "hidden"
          )}>
            <div className="flex flex-col items-center gap-6 pt-8 bg-background min-h-screen">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-medium text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md",
                    isActive(link.href) && "bg-muted text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            {mounted && (
              <button
                onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {currentTheme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
} 