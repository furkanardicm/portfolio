'use client';

import { useLanguage } from '@/lib/context';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          {language === 'tr' ? 'İletişim' : 'Contact'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'tr'
                ? 'Projeleriniz için benimle iletişime geçebilirsiniz.'
                : 'Feel free to contact me for your projects.'}
            </p>
            <div className="space-y-4">
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@example.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {language === 'tr' ? 'Ad Soyad' : 'Full Name'}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border bg-background"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border bg-background"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {language === 'tr' ? 'Mesaj' : 'Message'}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border bg-background resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-sm font-medium shadow transition-colors hover:bg-primary/90"
            >
              {language === 'tr' ? 'Gönder' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 