import axios, { AxiosInstance, AxiosError } from 'axios';
import { ApiError } from '@/types/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface ApiErrorResponse {
  message: string;
  status?: number;
}

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response.data,
      (error: AxiosError<ApiErrorResponse>) => {
        const apiError: ApiError = {
          message: error.response?.data?.message || 'Bir hata oluştu',
          status: error.response?.status,
        };
        return Promise.reject(apiError);
      }
    );
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public clearToken() {
    localStorage.removeItem('token');
  }

  public async get<T>(url: string, params?: object) {
    return this.client.get<T, T>(url, { params });
  }

  public async post<T>(url: string, data?: object) {
    return this.client.post<T, T>(url, data);
  }

  public async put<T>(url: string, data?: object) {
    return this.client.put<T, T>(url, data);
  }

  public async delete<T>(url: string) {
    return this.client.delete<T, T>(url);
  }
}

export const apiClient = new ApiClient(); 