import { NextResponse } from 'next/server';
import { getBlogPostById, updateBlogPost, deleteBlogPost } from '@/lib/services/blogService';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, { params }: Props) {
  const resolvedParams = await params;
  try {
    const post = await getBlogPostById(resolvedParams.id);
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: Props) {
  const resolvedParams = await params;
  try {
    const data = await request.json();
    const post = await updateBlogPost(resolvedParams.id, data);
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: Props) {
  const resolvedParams = await params;
  try {
    const post = await deleteBlogPost(resolvedParams.id);
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 