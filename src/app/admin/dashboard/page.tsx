'use client';

import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Admin Paneli',
      welcome: 'Hoş Geldiniz',
      sections: {
        projects: {
          title: 'Projeler',
          description: 'Projeleri görüntüle, düzenle ve yönet'
        },
        blog: {
          title: 'Blog Yazıları',
          description: 'Blog yazılarını görüntüle, düzenle ve yönet'
        },
        settings: {
          title: 'Ayarlar',
          description: 'Site ayarlarını düzenle'
        }
      }
    },
    en: {
      title: 'Admin Panel',
      welcome: 'Welcome',
      sections: {
        projects: {
          title: 'Projects',
          description: 'View, edit and manage projects'
        },
        blog: {
          title: 'Blog Posts',
          description: 'View, edit and manage blog posts'
        },
        settings: {
          title: 'Settings',
          description: 'Edit site settings'
        }
      }
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{content[language].title}</h1>
          <p className="text-xl text-muted-foreground mb-12">{content[language].welcome}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projeler */}
            <Link
              href="/admin/projects"
              className="block p-6 bg-card rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {content[language].sections.projects.title}
              </h2>
              <p className="text-muted-foreground">
                {content[language].sections.projects.description}
              </p>
            </Link>

            {/* Blog Yazıları */}
            <Link
              href="/admin/blog"
              className="block p-6 bg-card rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {content[language].sections.blog.title}
              </h2>
              <p className="text-muted-foreground">
                {content[language].sections.blog.description}
              </p>
            </Link>

            {/* Ayarlar */}
            <Link
              href="/admin/settings"
              className="block p-6 bg-card rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {content[language].sections.settings.title}
              </h2>
              <p className="text-muted-foreground">
                {content[language].sections.settings.description}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 