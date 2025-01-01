export interface User {
  id: string;
  email: string;
  name: string;
}

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

export interface Settings {
  hero: {
    tr: {
      title: string;
      subtitle: string;
      description: string;
    };
    en: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
  about: {
    tr: {
      title: string;
      content: string;
      skills: string[];
    };
    en: {
      title: string;
      content: string;
      skills: string[];
    };
  };
  contact: {
    email: string;
    phone?: string;
    location?: string;
    social: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      instagram?: string;
    };
  };
  seo: {
    tr: {
      title: string;
      description: string;
      keywords: string[];
    };
    en: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
} 