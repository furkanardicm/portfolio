'use client';

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/lib/context/language';
import { SmoothScrollProvider } from '@/components/providers/SmoothScroll';
import Header from '@/components/shared/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body className="overflow-y-scroll">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SmoothScrollProvider>
              <ScrollProgress />
              <div className="relative flex min-h-screen flex-col">
                <Header />
                {children}
                <Footer />
              </div>
              <Toaster position="top-right" />
            </SmoothScrollProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
