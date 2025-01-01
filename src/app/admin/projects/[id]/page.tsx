import EditProjectForm from '@/app/admin/projects/[id]/EditProjectForm';
import { Metadata } from 'next';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
}

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
  const rawProject = await db.collection("projects").findOne({ _id: new ObjectId(params.id) });

  if (!rawProject) {
    return <div>Proje bulunamadı</div>;
  }

  const project: Project = {
    _id: rawProject._id.toString(),
    title: rawProject.title,
    description: rawProject.description,
    technologies: rawProject.technologies,
    githubUrl: rawProject.githubUrl,
    liveUrl: rawProject.liveUrl,
    featured: rawProject.featured,
    order: rawProject.order
  };

  return <EditProjectForm id={params.id} initialData={project} />;
} 