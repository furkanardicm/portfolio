'use client';

import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Hoş Geldiniz',
      description: 'Portfolio admin paneline hoş geldiniz. Buradan projelerinizi ve blog yazılarınızı yönetebilirsiniz.',
      cards: {
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
      }
    },
    en: {
      title: 'Welcome',
      description: 'Welcome to the portfolio admin panel. Here you can manage your projects and blog posts.',
      cards: {
        projects: {
          title: 'Projects',
          description: 'Add, edit, or delete your projects.',
          action: 'Manage Projects'
        },
        blog: {
          title: 'Blog',
          description: 'Add, edit, or delete your blog posts.',
          action: 'Manage Blog Posts'
        },
        settings: {
          title: 'Settings',
          description: 'Configure your site settings.',
          action: 'Manage Settings'
        }
      }
    }
  };

  const cards = [
    {
      title: content[language].cards.projects.title,
      description: content[language].cards.projects.description,
      action: content[language].cards.projects.action,
      href: '/admin/projects',
      icon: '📁'
    },
    {
      title: content[language].cards.blog.title,
      description: content[language].cards.blog.description,
      action: content[language].cards.blog.action,
      href: '/admin/blog',
      icon: '📝'
    },
    {
      title: content[language].cards.settings.title,
      description: content[language].cards.settings.description,
      action: content[language].cards.settings.action,
      href: '/admin/settings',
      icon: '⚙️'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
        <p className="text-muted-foreground">{content[language].description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.href}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-muted-foreground mb-4">{card.description}</p>
            <Link
              href={card.href}
              className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
            >
              {card.action} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 