'use client';

import { useLanguage } from '@/lib/context/language';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {language === 'tr' ? 'EN' : 'TR'}
    </button>
  );
} 