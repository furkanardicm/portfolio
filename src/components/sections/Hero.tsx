'use client';

import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  const { language } = useLanguage();

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Muhammed Furkan Ardıç
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              {language === 'tr' ? 'Full Stack Web Geliştirici' : 'Full Stack Web Developer'}
            </h2>
            <h3 className="text-xl md:text-2xl mb-6">
              {language === 'tr' ? 'Merhaba' : 'Hi'}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'tr' ? (
                'Modern web teknolojileriyle kullanıcı odaklı ve performanslı çözümler üreten bir Full Stack geliştiriciyim. JavaScript, React.js, Next.js ve TypeScript başta olmak üzere güncel araçlarla, hem frontend hem de backend projelerde yer alıyorum. Estetik ve işlevselliği bir araya getiren web uygulamaları tasarlamayı seviyorum.'
              ) : (
                'I am a Full Stack developer creating user-focused and high-performance solutions with modern web technologies. I work on both frontend and backend projects using current tools, primarily JavaScript, React.js, Next.js, and TypeScript. I enjoy designing web applications that combine aesthetics and functionality.'
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://github.com/furkanardicm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#24292e] hover:bg-[#1b1f23] text-white rounded-md transition-all"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/furkanardicm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-md transition-all"
              >
                LinkedIn
              </Link>
              <Link
                href="mailto:furkanardcm@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ea4335] hover:bg-[#d62516] text-white rounded-md transition-all"
              >
                furkanardcm@gmail.com
              </Link>
            </div>
          </div>
          <div className="lg:w-96 lg:h-96 relative">
            <Image
              src="/images/profile.png"
              alt="Muhammed Furkan Ardıç"
              width={384}
              height={384}
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 