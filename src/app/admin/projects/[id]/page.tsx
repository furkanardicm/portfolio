import EditProjectForm from '@/app/admin/projects/[id]/EditProjectForm';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Proje #${params.id} Düzenle | Admin Panel`,
    description: `${params.id} ID'li projeyi düzenleme sayfası`
  };
}

export default function EditProjectPage({ params }: { params: { id: string } }) {
  return <EditProjectForm id={params.id} />;
} 