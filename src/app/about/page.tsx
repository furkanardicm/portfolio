'use client';

import { useLanguage } from '@/lib/context/language';

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Hakkımda',
      education: {
        title: 'Eğitim',
        university: 'Lisans Derecesi / Bilgisayar Mühendisliği, Konya Teknik Üniversitesi',
        gpa: 'GPA: 3.7'
      },
      experience: {
        title: 'Deneyim',
        jobs: [
          {
            title: 'Yalın Software, Staj',
            position: 'Fullstack Web Geliştirici Stajı',
            location: 'Bursa, Türkiye'
          },
          {
            title: 'Türkiye Taşkömürü Kurumu, Staj',
            position: 'Veritabanı ve Donanım üzerine Staj',
            location: 'Zonguldak, Türkiye'
          }
        ]
      },
      skills: {
        title: 'Yetenekler',
        list: [
          'JavaScript',
          'React.js',
          'Next.js',
          'TypeScript',
          'Express.js',
          'Flask',
          'TailwindCSS',
          'CSS',
          'HTML',
          'Python',
          'Git & Github',
          'C',
          'Algoritmik Düşünme',
          'MySQL'
        ]
      },
      languages: {
        title: 'Diller',
        list: [
          {
            name: 'İngilizce',
            level: 'B1'
          }
        ]
      }
    },
    en: {
      title: 'About Me',
      education: {
        title: 'Education',
        university: "Bachelor's Degree / Computer Engineering, Konya Technical University",
        gpa: 'GPA: 3.7'
      },
      experience: {
        title: 'Experience',
        jobs: [
          {
            title: 'Yalın Software, Internship',
            position: 'Fullstack Web Developer Intern',
            location: 'Bursa, Turkey'
          },
          {
            title: 'Turkish Hard Coal Enterprises, Internship',
            position: 'Database and Hardware Intern',
            location: 'Zonguldak, Turkey'
          }
        ]
      },
      skills: {
        title: 'Skills',
        list: [
          'JavaScript',
          'React.js',
          'Next.js',
          'TypeScript',
          'Express.js',
          'Flask',
          'TailwindCSS',
          'CSS',
          'HTML',
          'Python',
          'Git & Github',
          'C',
          'Algorithmic Thinking',
          'MySQL'
        ]
      },
      languages: {
        title: 'Languages',
        list: [
          {
            name: 'English',
            level: 'B1'
          }
        ]
      }
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{content[language].title}</h1>

          {/* Eğitim */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{content[language].education.title}</h2>
            <div className="bg-card rounded-lg p-6">
              <p className="text-lg mb-2">{content[language].education.university}</p>
              <p className="text-muted-foreground">{content[language].education.gpa}</p>
            </div>
          </section>

          {/* Deneyim */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{content[language].experience.title}</h2>
            <div className="space-y-4">
              {content[language].experience.jobs.map((job, index) => (
                <div key={index} className="bg-card rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2">{job.title}</h3>
                  <p className="text-muted-foreground mb-2">{job.position}</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Yetenekler */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{content[language].skills.title}</h2>
            <div className="flex flex-wrap gap-2">
              {content[language].skills.list.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Diller */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">{content[language].languages.title}</h2>
            <div className="space-y-2">
              {content[language].languages.list.map((language, index) => (
                <div key={index} className="bg-card rounded-lg p-4">
                  <p className="font-medium">{language.name}</p>
                  <p className="text-sm text-muted-foreground">{language.level}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 