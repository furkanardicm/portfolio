'use client';

import { useLanguage } from '@/lib/context/language';
import { Button } from '@/components/ui/button';
import { US, TR } from 'country-flag-icons/react/3x2';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
      className="flex items-center gap-1.5 px-2.5"
      aria-label={language === 'tr' ? 'Switch to English' : 'Türkçeye geç'}
    >
      {language === 'tr' ? (
        <>
          <US className="h-4 w-5" title="English" />
          <span className="text-sm font-medium">EN</span>
        </>
      ) : (
        <>
          <TR className="h-4 w-5" title="Türkçe" />
          <span className="text-sm font-medium">TR</span>
        </>
      )}
    </Button>
  );
} 