import { getProjects } from '@/lib/services/projectService';
import ProjectList from '@/components/ProjectList';

export const revalidate = 3600; // Her saat başı yeniden oluştur

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectList projects={projects} />;
} 