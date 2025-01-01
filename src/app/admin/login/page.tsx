'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/context/language';
import Cookies from 'js-cookie';

export default function AdminLoginPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      if (email === 'furkanardcm@gmail.com' && password === 'admin123') {
        // Token oluştur ve cookie'ye kaydet
        const token = btoa(email + ':' + new Date().getTime());
        Cookies.set('token', token, { expires: 7 }); // 7 gün geçerli
        router.push('/admin');
      } else {
        setError(content[language].error);
      }
    } catch (err) {
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
            {isLoading ? 'Giriş yapılıyor...' : content[language].login}
          </button>
        </form>
      </div>
    </main>
  );
} 