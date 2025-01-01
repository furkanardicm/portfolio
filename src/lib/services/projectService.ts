import Project, { IProject } from '../models/Project';
import connectDB from '../db/mongodb';

export async function getProjects(): Promise<IProject[]> {
  await connectDB();
  return Project.find().sort({ order: 1 });
}

export async function getFeaturedProjects(): Promise<IProject[]> {
  await connectDB();
  return Project.find({ featured: true }).sort({ order: 1 });
}

export async function getProjectById(id: string): Promise<IProject | null> {
  await connectDB();
  return Project.findById(id);
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