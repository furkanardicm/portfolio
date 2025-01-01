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
  if (!params?.id) {
    return {
      title: "Geçersiz Proje | Admin Panel",
      description: "Geçersiz proje ID'si"
    };
  }

  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const project = await db.collection("projects").findOne({ _id: new ObjectId(params.id) });

    return {
      title: `${project?.title || "Proje"} Düzenle | Admin Panel`,
      description: `${project?.title || params.id} projesini düzenleme sayfası`
    };
  } catch (error) {
    console.error("Metadata yüklenirken hata:", error);
    return {
      title: "Hata | Admin Panel",
      description: "Proje bilgileri yüklenirken bir hata oluştu"
    };
  }
}

export default async function EditProjectPage({ params }: PageProps) {
  if (!params?.id) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-destructive">
            Geçersiz proje ID&apos;si
          </div>
        </div>
      </div>
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const rawProject = await db.collection("projects").findOne({ _id: new ObjectId(params.id) });

    if (!rawProject) {
      return (
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center text-destructive">
              Proje bulunamadı
            </div>
          </div>
        </div>
      );
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
  } catch (error) {
    console.error('Proje yüklenirken hata:', error);
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-destructive">
            Proje yüklenirken bir hata oluştu
          </div>
        </div>
      </div>
    );
  }
} 