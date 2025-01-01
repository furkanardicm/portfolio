import { NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongodb';
import Skill from '@/lib/models/Skill';

export async function GET() {
  try {
    await connectDB();
    const skills = await Skill.find({}).sort({ category: 1 });
    return NextResponse.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 