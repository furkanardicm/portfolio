'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/context';
import { BlogPost } from '@/types/models';
import { formatDate } from '@/lib/utils/date';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const { language } = useLanguage();
  const title = post.title[language];
  const slug = post.slug[language];
  const tags = post.tags[language];

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-colors hover:bg-accent/5"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <time className="text-sm text-muted-foreground">
          {formatDate(post.publishDate, language)}
        </time>
      </div>
    </Link>
  );
} 