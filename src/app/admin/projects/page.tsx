'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/context/language';
import Link from 'next/link';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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

export default function AdminProjectsPage() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setProjects(data);
      toast.success(content[language].messages.fetchSuccess);
    } catch (error) {
      console.error('Projeler yüklenirken hata oluştu:', error);
      toast.error(content[language].messages.fetchError);
    } finally {
      setLoading(false);
    }
  };

  const content = {
    tr: {
      title: 'Proje Yönetimi',
      addNew: 'Yeni Proje Ekle',
      table: {
        title: 'Başlık',
        description: 'Açıklama',
        technologies: 'Teknolojiler',
        actions: 'İşlemler'
      },
      actions: {
        edit: 'Düzenle',
        delete: 'Sil'
      },
      messages: {
        fetchSuccess: 'Projeler başarıyla yüklendi',
        fetchError: 'Projeler yüklenirken bir hata oluştu',
        deleteConfirm: 'Bu projeyi silmek istediğinize emin misiniz?',
        deleteConfirmDescription: 'Bu işlem geri alınamaz. Proje kalıcı olarak silinecektir.',
        deleteSuccess: 'Proje başarıyla silindi',
        deleteError: 'Proje silinirken bir hata oluştu'
      },
      dialog: {
        cancel: 'İptal',
        confirm: 'Evet, Sil'
      },
      noProjects: 'Henüz proje bulunmuyor.',
      loading: 'Projeler yükleniyor...'
    },
    en: {
      title: 'Project Management',
      addNew: 'Add New Project',
      table: {
        title: 'Title',
        description: 'Description',
        technologies: 'Technologies',
        actions: 'Actions'
      },
      actions: {
        edit: 'Edit',
        delete: 'Delete'
      },
      messages: {
        fetchSuccess: 'Projects loaded successfully',
        fetchError: 'An error occurred while loading projects',
        deleteConfirm: 'Are you sure you want to delete this project?',
        deleteConfirmDescription: 'This action cannot be undone. The project will be permanently deleted.',
        deleteSuccess: 'Project deleted successfully',
        deleteError: 'An error occurred while deleting the project'
      },
      dialog: {
        cancel: 'Cancel',
        confirm: 'Yes, Delete'
      },
      noProjects: 'No projects found.',
      loading: 'Loading projects...'
    }
  };

  const handleDeleteClick = (project: Project) => {
    setProjectToDelete(project);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!projectToDelete) return;

    try {
      const response = await fetch(`/api/projects/${projectToDelete._id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Proje silinirken hata oluştu');
      }

      setProjects(projects.filter(project => project._id !== projectToDelete._id));
      toast.success(content[language].messages.deleteSuccess);
    } catch (error) {
      console.error('Proje silinirken hata oluştu:', error);
      toast.error(content[language].messages.deleteError);
    } finally {
      setDeleteDialogOpen(false);
      setProjectToDelete(null);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            {content[language].loading}
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold">{content[language].title}</h1>
              <Link
                href="/admin/projects/new"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {content[language].addNew}
              </Link>
            </div>

            {projects.length > 0 ? (
              <div className="bg-card rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">{content[language].table.title}</th>
                      <th className="text-left p-4">{content[language].table.description}</th>
                      <th className="text-left p-4">{content[language].table.technologies}</th>
                      <th className="text-left p-4">{content[language].table.actions}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project._id} className="border-b">
                        <td className="p-4">{project.title}</td>
                        <td className="p-4">{project.description}</td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Link
                              href={`/admin/projects/${project._id}`}
                              className="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                            >
                              {content[language].actions.edit}
                            </Link>
                            <button
                              onClick={() => handleDeleteClick(project)}
                              className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors"
                            >
                              {content[language].actions.delete}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                {content[language].noProjects}
              </div>
            )}
          </div>
        </div>
      </main>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{content[language].messages.deleteConfirm}</AlertDialogTitle>
            <AlertDialogDescription>
              {content[language].messages.deleteConfirmDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{content[language].dialog.cancel}</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {content[language].dialog.confirm}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
} 