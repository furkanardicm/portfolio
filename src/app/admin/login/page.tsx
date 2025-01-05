'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/context/language';
import Cookies from 'js-cookie';
import { LoadingSpinner } from "@/components/ui/loading";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Token varsa ve callback URL yoksa admin panele yönlendir
  useEffect(() => {
    const token = Cookies.get('token');
    if (token && !searchParams.get('callbackUrl')) {
      router.push('/admin');
    }
  }, [router, searchParams]);

  const content = {
    tr: {
      title: 'Admin Girişi',
      email: 'E-posta',
      password: 'Şifre',
      login: 'Giriş Yap',
      emailPlaceholder: 'E-posta adresinizi giriniz',
      passwordPlaceholder: 'Şifrenizi giriniz',
      error: 'Geçersiz e-posta veya şifre'
    },
    en: {
      title: 'Admin Login',
      email: 'Email',
      password: 'Password',
      login: 'Login',
      emailPlaceholder: 'Enter your email',
      passwordPlaceholder: 'Enter your password',
      error: 'Invalid email or password'
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (email === 'admin@portfolio.com' && password === 'Portfolio2025!') {
        const token = btoa(email + ':' + new Date().getTime());
        Cookies.set('token', token, { expires: 7 });
        
        // Callback URL varsa oraya, yoksa admin panele yönlendir
        const callbackUrl = searchParams.get('callbackUrl');
        router.push(callbackUrl || '/admin');
        router.refresh();
      } else {
        setError(content[language].error);
      }
    } catch {
      setError(content[language].error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center mb-8">{content[language].title}</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {content[language].email}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content[language].emailPlaceholder}
              className="w-full px-4 py-2 rounded-md border bg-background"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              {content[language].password}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={content[language].passwordPlaceholder}
              className="w-full px-4 py-2 rounded-md border bg-background"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner className="h-5 w-5" />
                <span>{content[language].login}</span>
              </div>
            ) : (
              content[language].login
            )}
          </button>
        </form>
      </div>
    </main>
  );
} 