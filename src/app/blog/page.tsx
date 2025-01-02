'use client';

import { useLanguage } from '@/lib/context/language';

export default function BlogPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Blog',
      description: 'Yazılım geliştirme, web teknolojileri ve kişisel deneyimlerim hakkında yazılar.',
      noPosts: 'Henüz blog yazısı bulunmuyor.'
    },
    en: {
      title: 'Blog',
      description: 'Articles about software development, web technologies, and personal experiences.',
      noPosts: 'No blog posts found yet.'
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
          <p className="text-lg text-muted-foreground mb-12">{content[language].description}</p>
          
          <div className="text-center py-12 text-muted-foreground">
            {content[language].noPosts}
          </div>
        </div>
      </div>
    </main>
  );
} 