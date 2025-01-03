'use client';

import { useLanguage } from '@/lib/context/language';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      <Languages className="h-5 w-5" />
    </button>
  );
} 