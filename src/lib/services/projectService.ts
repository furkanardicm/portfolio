import Project, { IProject } from '../models/Project';
import connectDB from '../db/mongodb';

export async function getProjects(): Promise<IProject[]> {
  await connectDB();
  const projects = await Project.find().sort({ order: 1 });
  return projects.map(project => ({
    _id: project._id.toString(),
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    featured: project.featured,
    order: project.order,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt
  }));
}

export async function getFeaturedProjects(): Promise<IProject[]> {
  await connectDB();
  const projects = await Project.find({ featured: true }).sort({ order: 1 });
  return projects.map(project => ({
    _id: project._id.toString(),
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    featured: project.featured,
    order: project.order,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt
  }));
}

export async function getProjectById(id: string): Promise<IProject | null> {
  await connectDB();
  const project = await Project.findById(id);
  if (!project) return null;
  
  return {
    _id: project._id.toString(),
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    featured: project.featured,
    order: project.order,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt
  };
}

export async function createProject(projectData: Omit<IProject, 'createdAt' | 'updatedAt'>): Promise<IProject> {
  await connectDB();
  return Project.create(projectData);
}

export async function updateProject(id: string, projectData: Partial<IProject>): Promise<IProject | null> {
  await connectDB();
  return Project.findByIdAndUpdate(id, projectData, { new: true });
}

export async function deleteProject(id: string): Promise<IProject | null> {
  await connectDB();
  return Project.findByIdAndDelete(id);
} 