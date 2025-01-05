'use client';

import { useLanguage } from "@/lib/context/language";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Cookies from 'js-cookie';
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Home, FolderKanban, FileText, Settings } from 'lucide-react';
import { useEffect, useState } from "react";

export default function AdminHeader() {
  const { language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    tr: {
      home: 'Ana Sayfa',
      projects: 'Projeler',
      blog: 'Blog Yazıları',
      settings: 'Ayarlar',
      logout: 'Çıkış Yap',
      backToSite: 'Siteye Dön'
    },
    en: {
      home: 'Home',
      projects: 'Projects',
      blog: 'Blog Posts',
      settings: 'Settings',
      logout: 'Logout',
      backToSite: 'Back to Site'
    }
  };

  const navigation = [
    { name: content[language].home, href: '/admin', icon: Home },
    { name: content[language].projects, href: '/admin/projects', icon: FolderKanban },
    { name: content[language].blog, href: '/admin/blog', icon: FileText },
    { name: content[language].settings, href: '/admin/settings', icon: Settings }
  ];

  const handleLogout = () => {
    Cookies.remove('token');
    router.replace('/admin/login');
  };

  const hasToken = mounted ? !!Cookies.get('token') : false;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="font-bold">
            Admin Panel
          </Link>
          <nav className="flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`p-2 rounded-md transition-colors hover:bg-accent flex items-center gap-2 ${
                  pathname === item.href
                    ? 'bg-accent text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {content[language].backToSite}
          </Link>
          {mounted && hasToken && (
            <Button
              variant="destructive"
              size="sm"
              onClick={handleLogout}
            >
              {content[language].logout}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
} 