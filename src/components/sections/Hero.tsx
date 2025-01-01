'use client';

import { useLanguage } from '@/lib/context';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const { language } = useLanguage();

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'tr' ? (
              <>Full Stack Yazılım Geliştirici</>
            ) : (
              <>Full Stack Software Developer</>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {language === 'tr' ? (
              <>Modern ve profesyonel web çözümleri geliştiriyorum.</>
            ) : (
              <>I develop modern and professional web solutions.</>
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-sm font-medium shadow transition-colors hover:bg-primary/90"
            >
              {language === 'tr' ? 'Projeleri Görüntüle' : 'View Projects'}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {language === 'tr' ? 'İletişime Geç' : 'Contact Me'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 