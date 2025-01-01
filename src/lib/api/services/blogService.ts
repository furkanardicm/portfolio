import { BlogPost } from '@/types/models';

// Geçici mock veri
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      tr: 'Next.js 13 ile Modern Web Geliştirme',
      en: 'Modern Web Development with Next.js 13'
    },
    content: {
      tr: 'Next.js 13 ile modern web uygulamaları geliştirme hakkında detaylı bir rehber.',
      en: 'A comprehensive guide about developing modern web applications with Next.js 13.'
    },
    slug: {
      tr: 'nextjs-13-ile-modern-web-gelistirme',
      en: 'modern-web-development-with-nextjs-13'
    },
    image: '/images/blog/nextjs.jpg',
    tags: {
      tr: ['Next.js', 'React', 'Web Geliştirme'],
      en: ['Next.js', 'React', 'Web Development']
    },
    published: true,
    publishDate: new Date('2023-12-25').toISOString(),
    createdAt: new Date('2023-12-24').toISOString(),
    updatedAt: new Date('2023-12-25').toISOString()
  },
  {
    id: '2',
    title: {
      tr: 'TypeScript ile Güvenli Kod Yazımı',
      en: 'Safe Coding with TypeScript'
    },
    content: {
      tr: 'TypeScript kullanarak daha güvenli ve sürdürülebilir kod yazma teknikleri.',
      en: 'Techniques for writing safer and more maintainable code using TypeScript.'
    },
    slug: {
      tr: 'typescript-ile-guvenli-kod-yazimi',
      en: 'safe-coding-with-typescript'
    },
    image: '/images/blog/typescript.jpg',
    tags: {
      tr: ['TypeScript', 'JavaScript', 'Programlama'],
      en: ['TypeScript', 'JavaScript', 'Programming']
    },
    published: true,
    publishDate: new Date('2023-12-20').toISOString(),
    createdAt: new Date('2023-12-19').toISOString(),
    updatedAt: new Date('2023-12-20').toISOString()
  },
  {
    id: '3',
    title: {
      tr: 'Tailwind CSS ile Modern UI Tasarımı',
      en: 'Modern UI Design with Tailwind CSS'
    },
    content: {
      tr: 'Tailwind CSS kullanarak modern ve responsive arayüzler tasarlama.',
      en: 'Designing modern and responsive interfaces using Tailwind CSS.'
    },
    slug: {
      tr: 'tailwind-css-ile-modern-ui-tasarimi',
      en: 'modern-ui-design-with-tailwind-css'
    },
    image: '/images/blog/tailwind.jpg',
    tags: {
      tr: ['Tailwind CSS', 'CSS', 'UI Tasarım'],
      en: ['Tailwind CSS', 'CSS', 'UI Design']
    },
    published: true,
    publishDate: new Date('2023-12-15').toISOString(),
    createdAt: new Date('2023-12-14').toISOString(),
    updatedAt: new Date('2023-12-15').toISOString()
  }
];

interface GetPostsParams {
  page?: number;
  limit?: number;
}

export const blogService = {
  // Tüm blog yazılarını getir
  getPosts: async ({ page = 1, limit = 10 }: GetPostsParams = {}) => {
    try {
      // API çağrısı simülasyonu
      await new Promise(resolve => setTimeout(resolve, 1000));
      const start = (page - 1) * limit;
      const end = start + limit;
      return { data: mockPosts.slice(start, end) };
    } catch (error) {
      throw error;
    }
  },

  // Slug'a göre blog yazısı getir
  getPostBySlug: async (slug: string, lang: string) => {
    try {
      // API çağrısı simülasyonu
      await new Promise(resolve => setTimeout(resolve, 1000));
      const post = mockPosts.find(p => p.slug[lang as keyof typeof p.slug] === slug);
      return { data: post };
    } catch (error) {
      throw error;
    }
  }
}; 