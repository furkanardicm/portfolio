import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname.startsWith('/admin');
  const isLoginPath = request.nextUrl.pathname === '/admin/login';
  const token = request.cookies.get('token')?.value;

  // Admin sayfalarına erişim kontrolü
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
  matcher: ['/admin/:path*']
} 