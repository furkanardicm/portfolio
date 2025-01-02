'use client';

import { useLanguage } from '@/lib/context/language';
import AboutSkills from '@/components/about/AboutSkills';
import { FaGraduationCap, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Hakkımda',
      description: 'Modern web teknolojileriyle kullanıcı odaklı ve performanslı çözümler üreten bir Full Stack geliştiriciyim. Frontend tarafında React.js ve Next.js ile modern, responsive ve SEO dostu web uygulamaları geliştiriyorum. TypeScript kullanarak daha güvenli ve sürdürülebilir kod yazıyorum. Backend tarafında Node.js ve Express.js ile RESTful API\'ler oluşturuyor, MongoDB ve MySQL gibi veritabanlarıyla çalışıyorum. Tailwind CSS ile modern ve kullanıcı dostu arayüzler tasarlıyor, Git ve GitHub ile versiyon kontrolü sağlıyorum. Her projede en iyi kullanıcı deneyimini sunmak için modern web teknolojilerini ve best practice\'leri takip ediyorum.',
      education: 'Konya Teknik Üniversitesi - Bilgisayar Mühendisliği',
      location: 'Türkiye',
      birthDate: '13.02.2002',
      skills: 'Yetenekler'
    },
    en: {
      title: 'About Me',
      description: 'I am a Full Stack developer creating user-focused and high-performance solutions with modern web technologies. On the frontend, I develop modern, responsive, and SEO-friendly web applications using React.js and Next.js. I write safer and more maintainable code using TypeScript. On the backend, I create RESTful APIs with Node.js and Express.js, working with databases like MongoDB and MySQL. I design modern and user-friendly interfaces with Tailwind CSS and ensure version control with Git and GitHub. I follow modern web technologies and best practices in every project to deliver the best user experience.',
      education: 'Konya Technical University - Computer Engineering',
      location: 'Turkey',
      birthDate: '13.02.2002',
      skills: 'Skills'
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
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-center md:text-left">{content[language].title}</h1>
          <p className="text-xl text-muted-foreground text-center md:text-left leading-relaxed">
            {content[language].description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid gap-4 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaGraduationCap className="w-5 h-5 text-primary" />
            <span className="text-foreground">{content[language].education}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaMapMarkerAlt className="w-5 h-5 text-primary" />
            <span className="text-foreground">{content[language].location}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaBirthdayCake className="w-5 h-5 text-primary" />
            <span className="text-foreground">{content[language].birthDate}</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-center md:text-left">{content[language].skills}</h2>
          <AboutSkills />
        </motion.div>
      </div>
    </motion.main>
  );
} 