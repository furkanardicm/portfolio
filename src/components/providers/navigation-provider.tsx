'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.includes('/admin');

  return (
    <>
      {!isAdminPage && <Navbar />}
      {children}
      {!isAdminPage && <Footer />}
    </>
  );
} 