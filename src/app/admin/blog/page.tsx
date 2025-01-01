'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export default function AdminBlogPage() {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const content = {
    tr: {
      title: 'Blog Yönetimi',
      addNew: 'Yeni Yazı Ekle',
      table: {
        title: 'Başlık',
        description: 'Açıklama',
        date: 'Tarih',
        status: 'Durum',
        actions: 'İşlemler'
      },
      status: {
        published: 'Yayında',
        draft: 'Taslak'
      },
      actions: {
        edit: 'Düzenle',
        delete: 'Sil'
      },
      noPosts: 'Henüz blog yazısı bulunmuyor.'
    },
    en: {
      title: 'Blog Management',
      addNew: 'Add New Post',
      table: {
        title: 'Title',
        description: 'Description',
        date: 'Date',
        status: 'Status',
        actions: 'Actions'
      },
      status: {
        published: 'Published',
        draft: 'Draft'
      },
      actions: {
        edit: 'Edit',
        delete: 'Delete'
      },
      noPosts: 'No blog posts found.'
    }
  };

  const handleDelete = async (id: string) => {
    // API çağrısı yapılacak
    if (window.confirm('Bu yazıyı silmek istediğinize emin misiniz?')) {
      try {
        // await deletePost(id);
        setPosts(posts.filter(post => post.id !== id));
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">{content[language].title}</h1>
            <Link
              href="/admin/blog/new"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {content[language].addNew}
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="bg-card rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">{content[language].table.title}</th>
                    <th className="text-left p-4">{content[language].table.description}</th>
                    <th className="text-left p-4">{content[language].table.date}</th>
                    <th className="text-left p-4">{content[language].table.status}</th>
                    <th className="text-left p-4">{content[language].table.actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id} className="border-b">
                      <td className="p-4">{post.title}</td>
                      <td className="p-4">{post.description}</td>
                      <td className="p-4">{formatDate(post.createdAt)}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            post.published
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {post.published
                            ? content[language].status.published
                            : content[language].status.draft}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Link
                            href={`/admin/blog/${post.id}`}
                            className="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                          >
                            {content[language].actions.edit}
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors"
                          >
                            {content[language].actions.delete}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              {content[language].noPosts}
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 