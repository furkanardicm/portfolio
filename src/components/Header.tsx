'use client';

import { useLanguage } from '@/lib/context/language';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const content = {
    tr: {
      darkMode: 'Koyu Tema',
      lightMode: 'Açık Tema',
      switchLanguage: 'Switch to English',
      currentLanguage: 'Türkçe'
    },
    en: {
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      switchLanguage: 'Türkçe\'ye geç',
      currentLanguage: 'English'
    }
  };

  return (
    <div className="flex items-center gap-4" role="navigation" aria-label="Site ayarları">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md"
        aria-label={theme === 'dark' ? content[language].lightMode : content[language].darkMode}
        title={theme === 'dark' ? content[language].lightMode : content[language].darkMode}
        type="button"
        role="switch"
        aria-checked={theme === 'dark'}
      >
        <span className="sr-only">
          {theme === 'dark' ? content[language].lightMode : content[language].darkMode}
        </span>
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Moon className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      <button
        onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md"
        aria-label={content[language].switchLanguage}
        title={content[language].switchLanguage}
        type="button"
        role="switch"
        aria-checked={language === 'tr'}
      >
        <span aria-label={`Current language: ${content[language].currentLanguage}`}>
          {language === 'tr' ? 'EN' : 'TR'}
        </span>
      </button>
    </div>
  );
} 