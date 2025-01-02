'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/context/language';

interface Setting {
  _id: string;
  key: string;
  value: string;
  type: string;
}

export default function SettingsPage() {
  const { language } = useLanguage();
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const content = useMemo(() => ({
    tr: {
      title: 'Site Ayarları',
      loading: 'Yükleniyor...',
      saving: 'Kaydediliyor...',
      save: 'Kaydet',
      labels: {
        email: 'E-posta Adresi',
        github: 'GitHub Profili',
        linkedin: 'LinkedIn Profili',
        siteTitle: 'Site Başlığı'
      },
      success: 'Ayarlar başarıyla güncellendi.',
      error: {
        fetch: 'Ayarlar yüklenirken bir hata oluştu.',
        update: 'Ayarlar güncellenirken bir hata oluştu.'
      }
    },
    en: {
      title: 'Site Settings',
      loading: 'Loading...',
      saving: 'Saving...',
      save: 'Save',
      labels: {
        email: 'Email Address',
        github: 'GitHub Profile',
        linkedin: 'LinkedIn Profile',
        siteTitle: 'Site Title'
      },
      success: 'Settings updated successfully.',
      error: {
        fetch: 'Failed to load settings.',
        update: 'Failed to update settings.'
      }
    }
  }), []);

  const fetchSettings = useCallback(async () => {
    try {
      const response = await fetch('/api/settings');
      if (!response.ok) throw new Error('Failed to fetch settings');
      const data = await response.json();
      setSettings(data);
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast.error(content[language].error.fetch);
    } finally {
      setLoading(false);
    }
  }, [language, content]);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const handleChange = (key: string, value: string) => {
    setSettings(prev =>
      prev.map(setting =>
        setting.key === key ? { ...setting, value } : setting
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (!response.ok) throw new Error('Failed to update settings');
      toast.success(content[language].success);
    } catch (error) {
      console.error('Error updating settings:', error);
      toast.error(content[language].error.update);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>{content[language].loading}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{content[language].title}</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {settings.map((setting) => (
          <div key={setting._id} className="space-y-2">
            <label htmlFor={setting.key} className="block text-sm font-medium">
              {content[language].labels[setting.key as keyof typeof content.tr.labels] || setting.key}
            </label>
            <input
              id={setting.key}
              type={setting.type === 'email' ? 'email' : 'text'}
              value={setting.value}
              onChange={(e) => handleChange(setting.key, e.target.value)}
              className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={saving}
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={saving}
          className={`
            w-full px-6 py-3 rounded-md font-medium relative overflow-hidden group
            ${saving
              ? 'bg-gray-400 cursor-not-allowed opacity-50'
              : 'bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300'
            }
          `}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {saving ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                {content[language].saving}
              </>
            ) : (
              content[language].save
            )}
          </span>
        </button>
      </form>
    </div>
  );
} 