import { Metadata } from 'next';
import { ProjectList } from '@/components/ProjectList';
import { getProjects } from '@/lib/services/projectService';

export const metadata: Metadata = {
  title: 'Projeler',
  description: 'Geliştirdiğim projeler',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="flex-1 bg-background py-12">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projeler</h1>
        </div>
        <div className="mt-8">
          <ProjectList projects={projects} />
        </div>
      </div>
    </main>
  );
} 