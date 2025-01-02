'use client';

import { useLanguage } from '@/lib/context/language';
import { useSettings } from '@/lib/hooks/useSettings';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { language } = useLanguage();
  const { settings } = useSettings();

  const content = {
    tr: {
      rights: 'Tüm hakları saklıdır.',
      location: 'Türkiye'
    },
    en: {
      rights: 'All rights reserved.',
      location: 'Turkey'
    }
  };

  return (
    <footer className="bg-background border-t">
      <div className="container max-w-[1400px] mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Sosyal Medya Linkleri */}
          <div className="flex items-center space-x-4">
            {settings.github && (
              <Link
                href={settings.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
            
            {settings.linkedin && (
              <Link
                href={settings.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            )}
            
            {settings.twitter && (
              <Link
                href={settings.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            )}
            
            {settings.email && (
              <Link
                href={`mailto:${settings.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            )}
          </div>

          {/* Telif Hakkı ve Lokasyon */}
          <div className="text-sm text-muted-foreground text-center">
            <p>© {new Date().getFullYear()} {settings.siteTitle}. {content[language].rights}</p>
            <p>{content[language].location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 