import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // WWW ve non-WWW yönlendirmesi
  const hostname = request.headers.get('host') || '';
  const wwwRegex = /^www\./;
  
  // WWW'lu URL'leri WWW'suz URL'lere yönlendir
  if (wwwRegex.test(hostname)) {
    const newHost = hostname.replace(wwwRegex, '');
    return NextResponse.redirect(
      `${request.nextUrl.protocol}//${newHost}${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    );
  }

  // Admin sayfalarına erişim kontrolü
  const isAdminPath = request.nextUrl.pathname.startsWith('/admin');
  const isLoginPath = request.nextUrl.pathname === '/admin/login';
  const token = request.cookies.get('token')?.value;

  // Admin sayfasına erişim kontrolü
  if (isAdminPath && !isLoginPath && !token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Admin sayfaları için header'ı değiştir
  if (isAdminPath) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-is-admin-page', 'true');

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/admin/:path*'
  ]
}; 