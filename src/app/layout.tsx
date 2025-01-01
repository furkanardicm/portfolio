import './globals.css';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/lib/context/language';
import Navbar from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { cn } from '@/lib/utils';
import { headers } from 'next/headers';
import { Mulish } from 'next/font/google';

const mulish = Mulish({ 
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const isAdminPage = headersList.get('x-is-admin-page') === 'true';

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', mulish.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {!isAdminPage && <Navbar />}
            {children}
            {!isAdminPage && <Footer />}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
