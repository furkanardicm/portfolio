'use client';

import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    tr: {
      home: 'Ana Sayfa',
      projects: 'Projeler',
      blog: 'Blog Yazıları',
      settings: 'Ayarlar',
      backToSite: 'Siteye Dön'
    },
    en: {
      home: 'Home',
      projects: 'Projects',
      blog: 'Blog Posts',
      settings: 'Settings',
      backToSite: 'Back to Site'
    }
  };

  const navigation = [
    { name: content[language].home, href: '/admin' },
    { name: content[language].projects, href: '/admin/projects' },
    { name: content[language].blog, href: '/admin/blog' },
    { name: content[language].settings, href: '/admin/settings' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container max-w-[1400px] mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobil Menu Butonu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              <Link href="/admin" className="text-lg font-bold">
                Admin Panel
              </Link>

              {/* Masaüstü Navigasyon */}
              <div className="hidden md:flex md:gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-bold transition-colors hover:text-primary ${
                      pathname === item.href
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {content[language].backToSite}
              </Link>
            </div>
          </div>

          {/* Mobil Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-bold transition-colors hover:text-primary ${
                      pathname === item.href
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
} 