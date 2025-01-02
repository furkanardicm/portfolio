'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/context/language';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Skills from '@/components/Skills';
import { motion } from 'framer-motion';

export default function Home() {
  const { language } = useLanguage();

  const content = {
    tr: {
      greeting: 'Merhaba',
      name: 'Muhammed Furkan Ardıç',
      title: 'Full Stack Web Geliştirici',
      description: 'Modern web teknolojileriyle kullanıcı odaklı ve performanslı çözümler üreten bir Full Stack geliştiriciyim. JavaScript, React.js, Next.js ve TypeScript başta olmak üzere güncel araçlarla, hem frontend hem de backend projelerde yer alıyorum. Estetik ve işlevselliği bir araya getiren web uygulamaları tasarlamayı seviyorum.',
      contact: 'İletişim',
      education: 'Konya Teknik Üniversitesi - Bilgisayar Mühendisliği',
      location: 'Türkiye',
      birthDate: '13.02.2002'
    },
    en: {
      greeting: "Hi, I'm",
      name: 'Muhammed Furkan Ardıç',
      title: 'Full Stack Web Developer',
      description: 'I am a Full Stack developer creating user-focused and high-performance solutions with modern web technologies. Proficient in JavaScript, React.js, Next.js, and TypeScript, I work on both frontend and backend projects. I enjoy designing web applications that combine aesthetics and functionality.',
      contact: 'Contact',
      education: 'Konya Technical University - Computer Engineering',
      location: 'Turkey',
      birthDate: '13.02.2002'
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="container max-w-7xl mx-auto px-4 py-8"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
        <div className="space-y-6 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              {content[language].greeting}
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold">
              {content[language].name}
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-primary">
              {content[language].title}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              {content[language].description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start"
          >
            <a href="https://github.com/furkanardicm" target="_blank" rel="noopener noreferrer" 
              className="flex items-center gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all">
              <FaGithub className="w-4 h-4 md:w-5 md:h-5" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/furkanardicm/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-[#0077B5] text-white rounded-md hover:bg-[#0077B5]/90 transition-all">
              <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" /> LinkedIn
            </a>
            <a href="mailto:furkanardcm@gmail.com"
              className="flex items-center gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-all">
              <FaEnvelope className="w-4 h-4 md:w-5 md:h-5" /> furkanardcm@gmail.com
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-48 h-48 md:w-64 md:h-64 relative shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-full p-1">
            <div className="absolute inset-0 bg-background rounded-full p-1">
              <div className="relative w-full h-full">
                <Image
                  src="/images/profile.png"
                  alt="Muhammed Furkan Ardıç"
                  fill
                  className="rounded-full object-cover"
                  priority
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Skills />
      </motion.div>
    </motion.main>
  );
}
