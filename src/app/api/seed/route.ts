import { NextResponse } from 'next/server';
import { projects } from '@/lib/data/projects';
import Project from '@/lib/models/Project';
import connectDB from '@/lib/db/mongodb';

export async function POST() {
  try {
    await connectDB();

    // Önce tüm projeleri silelim
    await Project.deleteMany({});

    // Projeleri ekleyelim
    const createdProjects = await Project.create(projects);

    return NextResponse.json({
      message: 'Database seeded successfully',
      projects: createdProjects
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 