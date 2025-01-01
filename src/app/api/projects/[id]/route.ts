import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = await params.id;

  if (!id) {
    return NextResponse.json(
      { error: "Proje ID'si gerekli" },
      { status: 400 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    
    const project = await db.collection("projects").findOne(
      { _id: new ObjectId(id) }
    );

    if (!project) {
      return NextResponse.json(
        { error: "Proje bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('Proje yüklenirken hata:', error);
    return NextResponse.json(
      { error: "Proje yüklenirken hata oluştu" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = await params.id;

  if (!id) {
    return NextResponse.json(
      { error: "Proje ID'si gerekli" },
      { status: 400 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const data = await request.json();

    const { _id, ...updateData } = data;

    const result = await db.collection("projects").updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Proje bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Proje güncellenirken hata:', error);
    return NextResponse.json(
      { error: "Proje güncellenirken hata oluştu" },
      { status: 500 }
    );
  }
} 