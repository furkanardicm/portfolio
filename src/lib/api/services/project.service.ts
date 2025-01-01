import { apiClient } from '../client';
import { Project } from '@/types/models';
import { ApiResponse, ProjectsResponse } from '@/types/api';

interface CreateProjectData {
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  order?: number;
}

export const projectService = {
  async getProjects(): Promise<ProjectsResponse> {
    return apiClient.get<ProjectsResponse>('/projects');
  },

  async getFeaturedProjects(): Promise<ApiResponse<Project[]>> {
    return apiClient.get<ApiResponse<Project[]>>('/projects/featured');
  },

  async getProject(id: string): Promise<ApiResponse<Project>> {
    return apiClient.get<ApiResponse<Project>>(`/projects/${id}`);
  },

  async createProject(data: CreateProjectData): Promise<ApiResponse<Project>> {
    return apiClient.post<ApiResponse<Project>>('/projects', data);
  },

  async updateProject(id: string, data: Partial<CreateProjectData>): Promise<ApiResponse<Project>> {
    return apiClient.put<ApiResponse<Project>>(`/projects/${id}`, data);
  },

  async deleteProject(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<ApiResponse<void>>(`/projects/${id}`);
  }
}; 