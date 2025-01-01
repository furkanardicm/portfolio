'use client';

import { useEffect, useState, useMemo, useCallback } from 'react';
import { useLanguage } from '@/lib/context/language';
import { ISkillCategory } from '@/lib/models/Skill';
import * as Icons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

export default function Skills() {
  const { language } = useLanguage();
  const [skills, setSkills] = useState<ISkillCategory[]>([]);
  const [error, setError] = useState<string | null>(null);

  const content = useMemo(() => ({
    tr: {
      title: 'Yetenekler',
      error: 'Yetenekler yüklenirken bir hata oluştu'
    },
    en: {
      title: 'Skills',
      error: 'An error occurred while loading skills'
    }
  }), []);

  const fetchSkills = useCallback(async () => {
    try {
      const response = await fetch('/api/skills');
      if (!response.ok) {
        throw new Error('Failed to fetch skills');
      }
      const data = await response.json();
      setSkills(data);
    } catch (err) {
      console.error('Error fetching skills:', err);
      setError(content[language].error);
    }
  }, [language, content]);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  const getIcon = (iconName: string) => {
    // @ts-expect-error - Dynamic icon import from react-icons/fa
    const FaIcon = Icons[iconName];
    // @ts-expect-error - Dynamic icon import from react-icons/si
    const SiIcon = SiIcons[iconName];
    const Icon = FaIcon || SiIcon;
    
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  if (error) {
    return (
      <div className="text-center text-destructive py-8">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">{content[language].title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((category) => (
          <div key={category._id} className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  {getIcon(skill.icon)}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 