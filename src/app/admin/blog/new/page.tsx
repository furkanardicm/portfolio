'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/context/language';
import { useRouter } from 'next/navigation';

interface BlogPostForm {
  title: string;
  description: string;
  content: string;
  slug: string;
  published: boolean;
}

export default function NewBlogPostPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const [formData, setFormData] = useState<BlogPostForm>({
    title: '',
    description: '',
    content: '',
    slug: '',
    published: false
  });

  const content = {
    tr: {
      title: 'Yeni Blog Yazısı Ekle',
      fields: {
        title: 'Başlık',
        description: 'Açıklama',
        content: 'İçerik',
        slug: 'URL Adresi',
        published: 'Yayınla'
      },
      save: 'Yazıyı Kaydet',
      cancel: 'İptal',
      success: 'Blog yazısı başarıyla eklendi.',
      error: 'Blog yazısı eklenirken bir hata oluştu.'
    },
    en: {
      title: 'Add New Blog Post',
      fields: {
        title: 'Title',
        description: 'Description',
        content: 'Content',
        slug: 'URL Slug',
        published: 'Publish'
      },
      save: 'Save Post',
      cancel: 'Cancel',
      success: 'Blog post added successfully.',
      error: 'An error occurred while adding the blog post.'
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // API çağrısı yapılacak
      // await createBlogPost(formData);
      alert(content[language].success);
      router.push('/admin/blog');
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert(content[language].error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    }));
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{content[language].title}</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                {content[language].fields.title}
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full px-4 py-2 rounded-md border bg-background"
                required
              />
            </div>

            <div>
              <label htmlFor="slug" className="block text-sm font-medium mb-2">
                {content[language].fields.slug}
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border bg-background"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                {content[language].fields.description}
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border bg-background h-24 resize-none"
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-2">
                {content[language].fields.content}
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border bg-background h-96 font-mono"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleCheckboxChange}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label htmlFor="published" className="ml-2 text-sm font-medium">
                {content[language].fields.published}
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {content[language].save}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
              >
                {content[language].cancel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 