import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token) {
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/projects/:path*',
    '/admin/dashboard/:path*',
    '/admin/settings/:path*',
    '/admin/blog/:path*',
    '/admin/((?!login).)*'
  ]
}; 