'use client';

import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';
import { Folder, FileText, Settings } from 'lucide-react';

export default function AdminPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Hoş Geldiniz',
      description: 'Portfolio admin paneline hoş geldiniz. Buradan projelerinizi ve blog yazılarınızı yönetebilirsiniz.',
      projects: {
        title: 'Projeler',
        description: 'Projelerinizi ekleyin, düzenleyin veya silin.',
        action: 'Projeleri Yönet'
      },
      blog: {
        title: 'Blog',
        description: 'Blog yazılarınızı ekleyin, düzenleyin veya silin.',
        action: 'Blog Yazılarını Yönet'
      },
      settings: {
        title: 'Ayarlar',
        description: 'Site ayarlarınızı yapılandırın.',
        action: 'Ayarları Yönet'
      }
    },
    en: {
      title: 'Welcome',
      description: 'Welcome to the portfolio admin panel. Here you can manage your projects and blog posts.',
      projects: {
        title: 'Projects',
        description: 'Add, edit or delete your projects.',
        action: 'Manage Projects'
      },
      blog: {
        title: 'Blog',
        description: 'Add, edit or delete your blog posts.',
        action: 'Manage Blog Posts'
      },
      settings: {
        title: 'Settings',
        description: 'Configure your site settings.',
        action: 'Manage Settings'
      }
    }
  };

  return (
    <div className="container max-w-[1400px] mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{content[language].description}</p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Projeler */}
          <Link
            href="/admin/projects"
            className="block p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <Folder className="w-8 h-8 mb-4 text-primary" />
            <h2 className="text-xl font-bold mb-2">{content[language].projects.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{content[language].projects.description}</p>
            <span className="text-sm font-medium text-primary">{content[language].projects.action} →</span>
          </Link>

          {/* Blog */}
          <Link
            href="/admin/blog"
            className="block p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <FileText className="w-8 h-8 mb-4 text-primary" />
            <h2 className="text-xl font-bold mb-2">{content[language].blog.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{content[language].blog.description}</p>
            <span className="text-sm font-medium text-primary">{content[language].blog.action} →</span>
          </Link>

          {/* Ayarlar */}
          <Link
            href="/admin/settings"
            className="block p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <Settings className="w-8 h-8 mb-4 text-primary" />
            <h2 className="text-xl font-bold mb-2">{content[language].settings.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{content[language].settings.description}</p>
            <span className="text-sm font-medium text-primary">{content[language].settings.action} →</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 