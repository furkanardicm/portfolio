'use client';

import { useLanguage } from '@/lib/context/language';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    tr: {
      title: 'Admin Panel',
      menu: {
        dashboard: 'Ana Sayfa',
        projects: 'Projeler',
        blog: 'Blog Yazıları',
        settings: 'Ayarlar'
      },
      theme: {
        light: 'Açık Tema',
        dark: 'Koyu Tema'
      }
    },
    en: {
      title: 'Admin Panel',
      menu: {
        dashboard: 'Dashboard',
        projects: 'Projects',
        blog: 'Blog Posts',
        settings: 'Settings'
      },
      theme: {
        light: 'Light Theme',
        dark: 'Dark Theme'
      }
    }
  };

  const menuItems = [
    { href: '/admin', label: content[language].menu.dashboard },
    { href: '/admin/projects', label: content[language].menu.projects },
    { href: '/admin/blog', label: content[language].menu.blog },
    { href: '/admin/settings', label: content[language].menu.settings }
  ];

  const isActiveLink = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">{content[language].title}</h1>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActiveLink(item.href)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-accent transition-colors"
                title={resolvedTheme === 'dark' ? content[language].theme.light : content[language].theme.dark}
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobil menü */}
        <div className="md:hidden border-t border-border">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Ana içerik */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
} 