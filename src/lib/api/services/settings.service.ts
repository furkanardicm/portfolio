import { apiClient } from '../client';
import { Settings } from '@/types/models';
import { ApiResponse } from '@/types/api';

interface GetSettingsParams {
  lang?: string;
}

export const settingsService = {
  async getSettings(params?: GetSettingsParams): Promise<ApiResponse<Settings>> {
    return apiClient.get<ApiResponse<Settings>>('/settings', params);
  },

  async getFullSettings(): Promise<ApiResponse<Settings>> {
    return apiClient.get<ApiResponse<Settings>>('/settings/full');
  },

  async updateSettings(data: Partial<Settings>): Promise<ApiResponse<Settings>> {
    return apiClient.put<ApiResponse<Settings>>('/settings', data);
  }
}; 