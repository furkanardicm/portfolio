'use client';

import { IProject } from '@/lib/models/Project';
import ProjectCard from './ProjectCard';
import { useLanguage } from '@/lib/context/language';

interface ProjectListProps {
  projects: IProject[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Projeler'
    },
    en: {
      title: 'Projects'
    }
  };

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{content[language].title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id?.toString()} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
} 