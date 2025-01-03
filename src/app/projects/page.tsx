import { getProjects } from '@/lib/services/projectService';
import ProjectList from '@/components/ProjectList';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectList projects={projects} />;
} 