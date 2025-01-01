import EditProjectForm from '@/app/admin/projects/[id]/EditProjectForm';
import { Metadata } from 'next';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const client = await clientPromise;
  const db = client.db("portfolio");
  const project = await db.collection("projects").findOne({ _id: new ObjectId(params.id) });

  return {
    title: `${project?.title || 'Proje'} Düzenle | Admin Panel`,
    description: `${project?.title || params.id} projesini düzenleme sayfası`
  };
}

export default async function EditProjectPage({ params }: PageProps) {
  const client = await clientPromise;
  const db = client.db("portfolio");
  const project = await db.collection("projects").findOne({ _id: new ObjectId(params.id) });

  if (!project) {
    return <div>Proje bulunamadı</div>;
  }

  return <EditProjectForm id={params.id} initialData={project} />;
} 