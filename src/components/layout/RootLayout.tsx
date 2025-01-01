import { ReactNode } from 'react';
import { AuthProvider, ThemeProvider, LanguageProvider } from '@/lib/context';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </NextThemesProvider>
  );
} 