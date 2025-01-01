'use client';

import { useLanguage } from '@/lib/context/language';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm text-foreground hover:text-primary transition-colors"
    >
      {language === 'tr' ? 'EN' : 'TR'}
    </button>
  );
} 