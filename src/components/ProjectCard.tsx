'use client';

import { IProject } from '@/lib/models/Project';
import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: IProject & { _id?: string };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  const content = {
    tr: {
      liveDemo: 'Canlı Demo'
    },
    en: {
      liveDemo: 'Live Demo'
    }
  };

  return (
    <div className="bg-card rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          GitHub
        </Link>
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            {content[language].liveDemo}
          </Link>
        )}
      </div>
    </div>
  );
} 