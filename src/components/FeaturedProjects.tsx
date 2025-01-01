'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/context/language';
import { IProject } from '@/lib/models/Project';
import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [error, setError] = useState('');

  const content = {
    tr: {
      title: 'Öne Çıkan Projeler',
      error: 'Projeler yüklenirken bir hata oluştu.',
      viewAll: 'Tüm Projeleri Gör'
    },
    en: {
      title: 'Featured Projects',
      error: 'An error occurred while loading projects.',
      viewAll: 'View All Projects'
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data.filter((project: IProject) => project.featured));
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(content[language].error);
      }
    };

    fetchProjects();
  }, [language]);

  if (error) {
    return (
      <div className="text-center text-destructive py-8">
        {error}
      </div>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{content[language].title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id?.toString()} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
} 