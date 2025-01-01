import { Project } from '@/types/models';

// Geçici mock veri
const mockProjects: Project[] = [
  {
    id: '1',
    title: {
      tr: 'E-Ticaret Projesi',
      en: 'E-Commerce Project'
    },
    description: {
      tr: 'Modern bir e-ticaret platformu. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirildi.',
      en: 'A modern e-commerce platform. Developed using Next.js, TypeScript, and Tailwind CSS.'
    },
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    order: 1,
    createdAt: new Date('2023-12-24').toISOString(),
    updatedAt: new Date('2023-12-25').toISOString()
  },
  {
    id: '2',
    title: {
      tr: 'Blog Platformu',
      en: 'Blog Platform'
    },
    description: {
      tr: 'Kişisel blog platformu. React ve Node.js kullanılarak geliştirildi.',
      en: 'Personal blog platform. Developed using React and Node.js.'
    },
    image: '/images/projects/blog.jpg',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    order: 2,
    createdAt: new Date('2023-12-20').toISOString(),
    updatedAt: new Date('2023-12-21').toISOString()
  },
  {
    id: '3',
    title: {
      tr: 'Task Yönetimi',
      en: 'Task Management'
    },
    description: {
      tr: 'Proje ve görev yönetim uygulaması. Vue.js ve Firebase kullanılarak geliştirildi.',
      en: 'Project and task management application. Developed using Vue.js and Firebase.'
    },
    image: '/images/projects/tasks.jpg',
    technologies: ['Vue.js', 'Firebase', 'Vuetify'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    order: 3,
    createdAt: new Date('2023-12-15').toISOString(),
    updatedAt: new Date('2023-12-16').toISOString()
  }
];

export const projectService = {
  // Tüm projeleri getir
  getProjects: async () => {
    try {
      // API çağrısı simülasyonu
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { data: mockProjects };
    } catch (error) {
      throw error;
    }
  },

  // Öne çıkan projeleri getir
  getFeaturedProjects: async () => {
    try {
      // API çağrısı simülasyonu
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { data: mockProjects.slice(0, 3) };
    } catch (error) {
      throw error;
    }
  },

  // ID'ye göre proje getir
  getProjectById: async (id: string) => {
    try {
      // API çağrısı simülasyonu
      await new Promise(resolve => setTimeout(resolve, 1000));
      const project = mockProjects.find(p => p.id === id);
      return { data: project };
    } catch (error) {
      throw error;
    }
  }
}; 