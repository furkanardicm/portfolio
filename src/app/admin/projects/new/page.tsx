'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/context/language';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function NewProjectPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    githubUrl: '',
    liveUrl: '',
    featured: false,
    order: 0
  });

  const content = {
    tr: {
      title: 'Yeni Proje Ekle',
      form: {
        title: 'Başlık',
        description: 'Açıklama',
        technologies: 'Teknolojiler (virgülle ayırın)',
        githubUrl: 'GitHub URL',
        liveUrl: 'Canlı Site URL (opsiyonel)',
        featured: 'Öne Çıkan',
        order: 'Sıralama',
        submit: 'Projeyi Ekle',
        submitting: 'Ekleniyor...'
      },
      messages: {
        success: 'Proje başarıyla eklendi',
        error: 'Proje eklenirken bir hata oluştu'
      }
    },
    en: {
      title: 'Add New Project',
      form: {
        title: 'Title',
        description: 'Description',
        technologies: 'Technologies (comma separated)',
        githubUrl: 'GitHub URL',
        liveUrl: 'Live Site URL (optional)',
        featured: 'Featured',
        order: 'Order',
        submit: 'Add Project',
        submitting: 'Adding...'
      },
      messages: {
        success: 'Project added successfully',
        error: 'An error occurred while adding the project'
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          technologies: formData.technologies.split(',').map(tech => tech.trim()),
        }),
      });

      if (!response.ok) {
        throw new Error('Proje eklenirken hata oluştu');
      }

      toast.success(content[language].messages.success);
      router.push('/admin/projects');
    } catch (error) {
      console.error('Proje eklenirken hata oluştu:', error);
      toast.error(content[language].messages.error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{content[language].title}</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                {content[language].form.title}
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {content[language].form.description}
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 border rounded-md bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {content[language].form.technologies}
              </label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {content[language].form.githubUrl}
              </label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {content[language].form.liveUrl}
              </label>
              <input
                type="url"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-background"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="rounded border-gray-300"
              />
              <label className="text-sm font-medium">
                {content[language].form.featured}
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {content[language].form.order}
              </label>
              <input
                type="number"
                name="order"
                value={formData.order}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md bg-background"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? content[language].form.submitting : content[language].form.submit}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
} 