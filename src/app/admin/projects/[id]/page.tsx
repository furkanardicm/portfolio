import EditProjectForm from '@/app/admin/projects/[id]/EditProjectForm';
import { Metadata } from 'next';

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Proje #${params.id} Düzenle | Admin Panel`,
    description: `${params.id} ID'li projeyi düzenleme sayfası`
  };
}

export default async function EditProjectPage({ params }: PageProps) {
  return <EditProjectForm id={params.id} />;
} 