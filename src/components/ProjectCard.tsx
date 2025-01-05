'use client';

import { IProject } from '@/lib/models/Project';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/lib/context/language';

interface ProjectCardProps {
  project: IProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  const content = {
    tr: {
      viewLive: 'Canlı Görüntüle',
      viewCode: 'Kodu Görüntüle'
    },
    en: {
      viewLive: 'View Live',
      viewCode: 'View Code'
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground">
      <div className="p-6">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="mt-4 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            {content[language].viewCode}
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              {content[language].viewLive}
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 