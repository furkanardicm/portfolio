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
      lightMode: 'Açık Tema'
    },
    en: {
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode'
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="text-muted-foreground hover:text-foreground transition-colors"
        title={theme === 'dark' ? content[language].lightMode : content[language].darkMode}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>

      <button
        onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {language === 'tr' ? 'EN' : 'TR'}
      </button>
    </div>
  );
} 