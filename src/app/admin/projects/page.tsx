'use client';

import { useLanguage } from "@/lib/context/language";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IProject } from "@/lib/models/Project";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "@/components/ui/loading";
import { Plus, Pencil, Trash2 } from "lucide-react";
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

export default function ProjectsPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<IProject | null>(null);

  const content = {
    tr: {
      title: 'Projeler',
      addNew: 'Yeni Proje Ekle',
      edit: 'Düzenle',
      delete: 'Sil',
      loading: 'Projeler yükleniyor...',
      noProjects: 'Henüz proje eklenmemiş.',
      deleteConfirm: {
        title: 'Projeyi Sil',
        description: 'Bu projeyi silmek istediğinize emin misiniz? Bu işlem geri alınamaz.',
        cancel: 'İptal',
        confirm: 'Evet, Sil'
      }
    },
    en: {
      title: 'Projects',
      addNew: 'Add New Project',
      edit: 'Edit',
      delete: 'Delete',
      loading: 'Loading projects...',
      noProjects: 'No projects added yet.',
      deleteConfirm: {
        title: 'Delete Project',
        description: 'Are you sure you want to delete this project? This action cannot be undone.',
        cancel: 'Cancel',
        confirm: 'Yes, Delete'
      }
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = (project: IProject) => {
    setProjectToDelete(project);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (!projectToDelete) return;

    try {
      const response = await fetch(`/api/projects/${projectToDelete._id.toString()}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchProjects();
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    } finally {
      setShowDeleteDialog(false);
      setProjectToDelete(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <LoadingSpinner className="h-8 w-8" />
        <span className="ml-2 text-muted-foreground">{content[language].loading}</span>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{content[language].title}</h1>
          <Button
            onClick={() => router.push('/admin/projects/new')}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            <Plus className="h-4 w-4" />
            {content[language].addNew}
          </Button>
        </div>

        {projects.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">{content[language].noProjects}</p>
        ) : (
          <div className="grid gap-4">
            {projects.map((project) => (
              <div
                key={project._id.toString()}
                className="p-4 rounded-lg border bg-card text-card-foreground"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => router.push(`/admin/projects/${project._id.toString()}`)}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    >
                      <Pencil className="h-4 w-4" />
                      {content[language].edit}
                    </Button>
                    <Button
                      onClick={() => handleDeleteClick(project)}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                      {content[language].delete}
                    </Button>
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{content[language].deleteConfirm.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {content[language].deleteConfirm.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{content[language].deleteConfirm.cancel}</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700"
            >
              {content[language].deleteConfirm.confirm}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
} 