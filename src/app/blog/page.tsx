'use client';

import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';

export default function BlogPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Blog',
      description: 'Yazılım geliştirme, web teknolojileri ve kişisel deneyimlerim hakkında yazılar.',
      posts: [
        {
          title: 'Next.js 13 ile Modern Web Geliştirme',
          description: 'Next.js 13 ile modern web uygulamaları geliştirme hakkında detaylı bir rehber.',
          date: '25 Aralık 2023',
          readTime: '10 dk',
          slug: 'nextjs-13-ile-modern-web-gelistirme'
        },
        {
          title: 'TypeScript ile Güvenli Kod Yazımı',
          description: 'TypeScript kullanarak daha güvenli ve sürdürülebilir kod yazma teknikleri.',
          date: '20 Aralık 2023',
          readTime: '8 dk',
          slug: 'typescript-ile-guvenli-kod-yazimi'
        },
        {
          title: 'Tailwind CSS ile Modern UI Tasarımı',
          description: 'Tailwind CSS kullanarak modern ve responsive arayüzler tasarlama.',
          date: '15 Aralık 2023',
          readTime: '12 dk',
          slug: 'tailwind-css-ile-modern-ui-tasarimi'
        }
      ]
    },
    en: {
      title: 'Blog',
      description: 'Articles about software development, web technologies, and personal experiences.',
      posts: [
        {
          title: 'Modern Web Development with Next.js 13',
          description: 'A comprehensive guide about developing modern web applications with Next.js 13.',
          date: 'December 25, 2023',
          readTime: '10 min',
          slug: 'modern-web-development-with-nextjs-13'
        },
        {
          title: 'Safe Coding with TypeScript',
          description: 'Techniques for writing safer and more maintainable code using TypeScript.',
          date: 'December 20, 2023',
          readTime: '8 min',
          slug: 'safe-coding-with-typescript'
        },
        {
          title: 'Modern UI Design with Tailwind CSS',
          description: 'Designing modern and responsive interfaces using Tailwind CSS.',
          date: 'December 15, 2023',
          readTime: '12 min',
          slug: 'modern-ui-design-with-tailwind-css'
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
          <p className="text-lg text-muted-foreground mb-12">{content[language].description}</p>
          
          <div className="space-y-8">
            {content[language].posts.map((post, index) => (
              <article key={index} className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 