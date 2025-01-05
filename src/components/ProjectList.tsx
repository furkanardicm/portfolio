'use client';

import { IProject } from '@/lib/models/Project';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '@/lib/context/language';

interface ProjectListProps {
  projects: IProject[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const { language } = useLanguage();

  const content = {
    tr: {
      noProjects: 'Henüz proje eklenmemiş.'
    },
    en: {
      noProjects: 'No projects added yet.'
    }
  };

  if (projects.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-8">
        {content[language].noProjects}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project._id.toString()} project={project} />
      ))}
    </div>
  );
} 