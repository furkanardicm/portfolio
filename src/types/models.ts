export interface Project {
  id: string;
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
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: {
    tr: string;
    en: string;
  };
  content: {
    tr: string;
    en: string;
  };
  slug: {
    tr: string;
    en: string;
  };
  image: string;
  tags: {
    tr: string[];
    en: string[];
  };
  published: boolean;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Settings {
  id: string;
  theme: 'light' | 'dark' | 'system';
  language: 'tr' | 'en';
  notifications: boolean;
  emailNotifications: boolean;
  createdAt: string;
  updatedAt: string;
} 