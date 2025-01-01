'use client';

import { useLanguage } from '@/lib/context/language';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'İletişim',
      description: 'Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.',
      location: 'Türkiye',
      email: 'E-posta',
      social: 'Sosyal Medya',
      message: 'Mesaj Gönder',
      form: {
        name: 'Adınız',
        email: 'E-posta Adresiniz',
        message: 'Mesajınız',
        send: 'Gönder',
        namePlaceholder: 'Adınızı giriniz',
        emailPlaceholder: 'E-posta adresinizi giriniz',
        messagePlaceholder: 'Mesajınızı yazınız'
      }
    },
    en: {
      title: 'Contact',
      description: 'You can use the following channels to get in touch with me.',
      location: 'Turkey',
      email: 'Email',
      social: 'Social Media',
      message: 'Send Message',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send',
        namePlaceholder: 'Enter your name',
        emailPlaceholder: 'Enter your email',
        messagePlaceholder: 'Write your message'
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
  };

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-center md:text-left">{content[language].title}</h1>
          <p className="text-lg text-muted-foreground text-center md:text-justify">
            {content[language].description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">{content[language].email}</h2>
              <a
                href="mailto:furkanardcm@gmail.com"
                className="flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors group"
              >
                <FaEnvelope className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                furkanardcm@gmail.com
              </a>
              <div className="flex items-center gap-3 text-lg">
                <FaMapMarkerAlt className="w-5 h-5 text-primary" />
                <span>{content[language].location}</span>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">{content[language].social}</h2>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/furkanardicm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors group"
                >
                  <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/furkanardicm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors group"
                >
                  <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">{content[language].message}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {content[language].form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  placeholder={content[language].form.namePlaceholder}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {content[language].form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  placeholder={content[language].form.emailPlaceholder}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {content[language].form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border bg-background resize-none"
                  placeholder={content[language].form.messagePlaceholder}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {content[language].form.send}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
} 