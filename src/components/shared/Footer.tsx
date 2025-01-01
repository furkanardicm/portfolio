'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              Modern ve profesyonel web çözümleri geliştiren full-stack yazılım geliştiricisi.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/furkanardicm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/furkanardicm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: furkanardcm@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">
                Konum: Konya, Türkiye
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Portfolio. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 