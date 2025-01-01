import { apiClient } from '../client';
import { BlogPost } from '@/types/models';
import { ApiResponse, BlogPostsResponse } from '@/types/api';

interface GetPostsParams {
  page?: number;
  limit?: number;
  lang?: string;
}

interface CreatePostData {
  title: {
    tr: string;
    en: string;
  };
  content: {
    tr: string;
    en: string;
  };
  image: string;
  tags: {
    tr: string[];
    en: string[];
  };
  published?: boolean;
}

export const blogService = {
  async getPosts(params?: GetPostsParams): Promise<BlogPostsResponse> {
    return apiClient.get<BlogPostsResponse>('/blog', params);
  },

  async getPost(slug: string, lang: string): Promise<ApiResponse<BlogPost>> {
    return apiClient.get<ApiResponse<BlogPost>>(`/blog/${slug}`, { lang });
  },

  async getAdminPosts(params?: GetPostsParams): Promise<BlogPostsResponse> {
    return apiClient.get<BlogPostsResponse>('/blog/admin/posts', params);
  },

  async createPost(data: CreatePostData): Promise<ApiResponse<BlogPost>> {
    return apiClient.post<ApiResponse<BlogPost>>('/blog', data);
  },

  async updatePost(id: string, data: Partial<CreatePostData>): Promise<ApiResponse<BlogPost>> {
    return apiClient.put<ApiResponse<BlogPost>>(`/blog/${id}`, data);
  },

  async deletePost(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<ApiResponse<void>>(`/blog/${id}`);
  }
}; 