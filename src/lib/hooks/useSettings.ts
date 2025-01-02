import { useEffect, useState } from 'react';
import { ISetting } from '../models/Setting';

interface Settings {
  [key: string]: string;
}

const keyMapping: { [key: string]: string } = {
  'contact.email': 'email',
  'social.github': 'github',
  'social.linkedin': 'linkedin',
  'site.title': 'siteTitle'
};

export function useSettings() {
  const [settings, setSettings] = useState<Settings>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        console.log('Fetching settings...');
        const response = await fetch('/api/settings');
        if (!response.ok) throw new Error('Failed to fetch settings');
        
        const data: ISetting[] = await response.json();
        console.log('Received settings:', data);
        
        const settingsMap = data.reduce((acc, setting) => {
          const mappedKey = keyMapping[setting.key] || setting.key;
          return {
            ...acc,
            [mappedKey]: setting.value
          };
        }, {} as Settings);
        
        console.log('Processed settings:', settingsMap);
        setSettings(settingsMap);
        setError(null);
      } catch (error) {
        console.error('Error fetching settings:', error);
        setError('Failed to fetch settings');
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading, error };
} 