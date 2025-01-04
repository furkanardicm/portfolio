import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/lib/context/language';
import { Toaster } from 'sonner';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammed Furkan Ardıç | Full Stack Web Developer',
  description: 'Full Stack Web Developer olarak modern web teknolojileri ile kullanıcı odaklı ve performanslı çözümler üretiyorum. JavaScript, React.js, Next.js ve TypeScript başta olmak üzere güncel araçlarla, hem frontend hem de backend projeler geliştiriyorum.',
  keywords: 'Full Stack Developer, Web Developer, JavaScript, React.js, Next.js, TypeScript, Frontend, Backend',
  authors: [{ name: 'Muhammed Furkan Ardıç' }],
  creator: 'Muhammed Furkan Ardıç',
  publisher: 'Muhammed Furkan Ardıç',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://portfolio-5tnp.vercel.app',
    title: 'Muhammed Furkan Ardıç | Full Stack Web Developer',
    description: 'Full Stack Web Developer olarak modern web teknolojileri ile kullanıcı odaklı ve performanslı çözümler üretiyorum.',
    siteName: 'Muhammed Furkan Ardıç Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammed Furkan Ardıç | Full Stack Web Developer',
    description: 'Full Stack Web Developer olarak modern web teknolojileri ile kullanıcı odaklı ve performanslı çözümler üretiyorum.',
    creator: '@furkanardicm',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/profile.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4">
                Ana içeriğe atla
              </a>
              <Navbar />
              <main id="main-content" className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster position="top-right" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
