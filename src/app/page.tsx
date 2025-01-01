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
      className="flex min-h-screen flex-col items-center justify-center bg-background p-8"
    >
      <div className="container max-w-4xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
          <div className="flex-1 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-base md:text-xl text-muted-foreground mb-2 text-center">{content[language].greeting}</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-center">{content[language].name}</h1>
              <h2 className="text-xl md:text-3xl text-muted-foreground mb-3 md:mb-4 text-center">{content[language].title}</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center md:text-justify">{content[language].description}</p>
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
            className="w-48 h-48 md:w-64 md:h-64 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-full p-1">
              <div className="absolute inset-0 bg-background rounded-full p-1">
                <Image
                  src="/images/profile.png"
                  alt="Muhammed Furkan Ardıç"
                  fill
                  className="rounded-full object-cover"
                  priority
                  unoptimized
                />
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
      </div>
    </motion.main>
  );
}
