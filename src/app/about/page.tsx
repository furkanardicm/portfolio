'use client';

import { useLanguage } from '@/lib/context/language';
import AboutSkills from '@/components/about/AboutSkills';
import { FaGraduationCap, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Hakkımda',
      description: 'Modern web teknolojileriyle kullanıcı odaklı ve performanslı çözümler üreten bir Full Stack geliştiriciyim. JavaScript, React.js, Next.js ve TypeScript başta olmak üzere güncel araçlarla, hem frontend hem de backend projelerde yer alıyorum. Estetik ve işlevselliği bir araya getiren web uygulamaları tasarlamayı seviyorum.',
      education: 'Konya Teknik Üniversitesi - Bilgisayar Mühendisliği',
      location: 'Konya, Türkiye',
      birthDate: '13.02.2002',
      skills: 'Yetenekler'
    },
    en: {
      title: 'About Me',
      description: 'I am a Full Stack developer creating user-focused and high-performance solutions with modern web technologies. Proficient in JavaScript, React.js, Next.js, and TypeScript, I work on both frontend and backend projects. I enjoy designing web applications that combine aesthetics and functionality.',
      education: 'Konya Technical University - Computer Engineering',
      location: 'Konya, Turkey',
      birthDate: '13.02.2002',
      skills: 'Skills'
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-center md:text-left">{content[language].title}</h1>
          <p className="text-lg text-muted-foreground text-justify leading-relaxed">
            {content[language].description}
          </p>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <FaGraduationCap className="w-5 h-5 text-primary" />
            <span className="text-foreground">{content[language].education}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="w-5 h-5 text-primary" />
            <span className="text-foreground">{content[language].location}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaBirthdayCake className="w-5 h-5 text-primary" />
            <span className="text-foreground">{content[language].birthDate}</span>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center md:text-left">{content[language].skills}</h2>
          <AboutSkills />
        </div>
      </div>
    </main>
  );
} 