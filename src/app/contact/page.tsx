'use client';

import { useLanguage } from '@/lib/context/language';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'İletişim',
      description: 'Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.',
      email: 'E-posta',
      social: 'Sosyal Medya',
      form: {
        title: 'İletişim Formu',
        name: 'Adınız',
        email: 'E-posta Adresiniz',
        message: 'Mesajınız',
        send: 'Gönder',
        namePlaceholder: 'Adınızı giriniz',
        emailPlaceholder: 'E-posta adresinizi giriniz',
        messagePlaceholder: 'Mesajınızı giriniz'
      }
    },
    en: {
      title: 'Contact',
      description: 'You can use the following channels to get in touch with me.',
      email: 'Email',
      social: 'Social Media',
      form: {
        title: 'Contact Form',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send',
        namePlaceholder: 'Enter your name',
        emailPlaceholder: 'Enter your email',
        messagePlaceholder: 'Enter your message'
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
          <p className="text-lg text-muted-foreground mb-12">{content[language].description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* İletişim Bilgileri */}
            <div className="space-y-6">
              {/* E-posta */}
              <div>
                <h2 className="text-xl font-semibold mb-4">{content[language].email}</h2>
                <Link
                  href="mailto:furkanardcm@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FaEnvelope className="w-5 h-5" />
                  furkanardcm@gmail.com
                </Link>
              </div>

              {/* Sosyal Medya */}
              <div>
                <h2 className="text-xl font-semibold mb-4">{content[language].social}</h2>
                <div className="space-y-3">
                  <Link
                    href="https://github.com/furkanardicm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/furkanardicm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <div>
              <h2 className="text-xl font-semibold mb-4">{content[language].form.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {content[language].form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={content[language].form.namePlaceholder}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {content[language].form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={content[language].form.emailPlaceholder}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {content[language].form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={content[language].form.messagePlaceholder}
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  {content[language].form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 