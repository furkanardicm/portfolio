'use client';

import AdminHeader from "@/components/admin/header";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <AdminHeader />
      <main className="container py-6">
        {children}
      </main>
    </div>
  );
} 