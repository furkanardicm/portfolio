'use client';

import { useLanguage } from '@/lib/context/language';
import { ProjectCard } from '@/components/ProjectCard';
import { IProject } from '@/lib/models/Project';
import { useEffect, useState } from 'react';

export function FeaturedProjects() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const content = {
    tr: {
      title: 'Öne Çıkan Projeler',
      description: 'Geliştirdiğim bazı projeler'
    },
    en: {
      title: 'Featured Projects',
      description: 'Some of the projects I have built'
    }
  };

  const filteredProjects = projects.filter(project => project.featured);

  if (filteredProjects.length === 0) {
    return null;
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {content[language].title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {content[language].description}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id.toString()} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
} 