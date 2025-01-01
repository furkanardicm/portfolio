'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/context/language';

interface Settings {
  siteTitle: string;
  siteDescription: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
}

export default function AdminSettingsPage() {
  const { language } = useLanguage();
  const [settings, setSettings] = useState<Settings>({
    siteTitle: '',
    siteDescription: '',
    email: '',
    githubUrl: '',
    linkedinUrl: '',
    twitterUrl: ''
  });

  const content = {
    tr: {
      title: 'Site Ayarları',
      sections: {
        general: 'Genel Ayarlar',
        social: 'Sosyal Medya'
      },
      fields: {
        siteTitle: 'Site Başlığı',
        siteDescription: 'Site Açıklaması',
        email: 'E-posta Adresi',
        githubUrl: 'GitHub URL',
        linkedinUrl: 'LinkedIn URL',
        twitterUrl: 'Twitter URL'
      },
      save: 'Değişiklikleri Kaydet',
      success: 'Ayarlar başarıyla güncellendi.',
      error: 'Ayarlar güncellenirken bir hata oluştu.'
    },
    en: {
      title: 'Site Settings',
      sections: {
        general: 'General Settings',
        social: 'Social Media'
      },
      fields: {
        siteTitle: 'Site Title',
        siteDescription: 'Site Description',
        email: 'Email Address',
        githubUrl: 'GitHub URL',
        linkedinUrl: 'LinkedIn URL',
        twitterUrl: 'Twitter URL'
      },
      save: 'Save Changes',
      success: 'Settings updated successfully.',
      error: 'An error occurred while updating settings.'
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // API çağrısı yapılacak
      // await updateSettings(settings);
      alert(content[language].success);
    } catch (error) {
      console.error('Error updating settings:', error);
      alert(content[language].error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{content[language].title}</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Genel Ayarlar */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{content[language].sections.general}</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="siteTitle" className="block text-sm font-medium mb-2">
                    {content[language].fields.siteTitle}
                  </label>
                  <input
                    type="text"
                    id="siteTitle"
                    name="siteTitle"
                    value={settings.siteTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="siteDescription" className="block text-sm font-medium mb-2">
                    {content[language].fields.siteDescription}
                  </label>
                  <textarea
                    id="siteDescription"
                    name="siteDescription"
                    value={settings.siteDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border bg-background h-24 resize-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {content[language].fields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={settings.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Sosyal Medya */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{content[language].sections.social}</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="githubUrl" className="block text-sm font-medium mb-2">
                    {content[language].fields.githubUrl}
                  </label>
                  <input
                    type="url"
                    id="githubUrl"
                    name="githubUrl"
                    value={settings.githubUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="linkedinUrl" className="block text-sm font-medium mb-2">
                    {content[language].fields.linkedinUrl}
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={settings.linkedinUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="twitterUrl" className="block text-sm font-medium mb-2">
                    {content[language].fields.twitterUrl}
                  </label>
                  <input
                    type="url"
                    id="twitterUrl"
                    name="twitterUrl"
                    value={settings.twitterUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  />
                </div>
              </div>
            </section>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {content[language].save}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
} 