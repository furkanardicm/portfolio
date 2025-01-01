import BlogPost, { IBlogPost } from '../models/BlogPost';
import connectDB from '../db/mongodb';

export async function getBlogPosts(): Promise<IBlogPost[]> {
  await connectDB();
  return BlogPost.find({ published: true }).sort({ createdAt: -1 });
}

export async function getAllBlogPosts(): Promise<IBlogPost[]> {
  await connectDB();
  return BlogPost.find().sort({ createdAt: -1 });
}

export async function getBlogPostBySlug(slug: string): Promise<IBlogPost | null> {
  await connectDB();
  return BlogPost.findOne({ slug });
}

export async function getBlogPostById(id: string): Promise<IBlogPost | null> {
  await connectDB();
  return BlogPost.findById(id);
}

export async function createBlogPost(postData: Omit<IBlogPost, 'createdAt' | 'updatedAt'>): Promise<IBlogPost> {
  await connectDB();
  return BlogPost.create(postData);
}

export async function updateBlogPost(id: string, postData: Partial<IBlogPost>): Promise<IBlogPost | null> {
  await connectDB();
  return BlogPost.findByIdAndUpdate(id, postData, { new: true });
}

export async function deleteBlogPost(id: string): Promise<IBlogPost | null> {
  await connectDB();
  return BlogPost.findByIdAndDelete(id);
} 