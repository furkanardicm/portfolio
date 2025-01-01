'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useLanguage } from '@/lib/context';
import { BlogPost } from '@/types/models';
import { blogService } from '@/lib/api/services';
import { PostCard } from '../ui/PostCard';

export default function LatestPosts() {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const content = useMemo(() => ({
    tr: {
      title: 'Son Yazılar',
      error: 'Yazılar yüklenirken bir hata oluştu.',
      loading: 'Yazılar yükleniyor...'
    },
    en: {
      title: 'Latest Posts',
      error: 'An error occurred while loading posts.',
      loading: 'Loading posts...'
    }
  }), []);

  const fetchPosts = useCallback(async () => {
    try {
      const { data } = await blogService.getPosts({
        limit: 3,
        page: 1
      });
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError(content[language].error);
    } finally {
      setLoading(false);
    }
  }, [language, content]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <div className="text-center py-8">{content[language].loading}</div>;
  }

  if (error) {
    return <div className="text-center text-destructive py-8">{error}</div>;
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          {language === 'tr' ? 'Son Blog Yazıları' : 'Latest Blog Posts'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
} 