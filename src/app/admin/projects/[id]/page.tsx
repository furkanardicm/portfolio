import EditProjectForm from '@/app/admin/projects/[id]/EditProjectForm';

interface Props {
  params: {
    id: string;
  };
}

export default function EditProjectPage({ params }: Props) {
  return <EditProjectForm id={params.id} />;
} 