import { User, Project, BlogPost } from '../models';

export interface ApiResponse<T> {
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export type ProjectsResponse = PaginatedResponse<Project>;
export type BlogPostsResponse = PaginatedResponse<BlogPost>;

export interface ApiError {
  message: string;
  status?: number;
} 