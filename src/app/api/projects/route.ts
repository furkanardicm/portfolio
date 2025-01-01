import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const projects = await db.collection("projects").find({}).toArray();
    return NextResponse.json(projects);
  } catch {
    return NextResponse.json({ error: "Projeler yüklenirken hata oluştu" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const data = await request.json();
    
    const result = await db.collection("projects").insertOne({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch {
    return NextResponse.json({ error: "Proje eklenirken hata oluştu" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const data = await request.json();
    const { id, ...updateData } = data;

    await db.collection("projects").updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      }
    );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Proje güncellenirken hata oluştu" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: "ID parametresi gerekli" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("portfolio");
    
    await db.collection("projects").deleteOne({ _id: new ObjectId(id) });
    
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Proje silinirken hata oluştu" }, { status: 500 });
  }
} 