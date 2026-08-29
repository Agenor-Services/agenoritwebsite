import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let decodedPath = '';
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    decodedPath = pathname;
  }

  // Check for LinkedIn placeholder link (e.g. /[LinkedIn URL] or /%5BLinkedIn%20URL%5D)
  if (
    pathname.includes('LinkedIn') || 
    pathname.includes('%5BLinkedIn') || 
    decodedPath.includes('[LinkedIn URL]') ||
    decodedPath.toLowerCase().includes('linkedin url') ||
    decodedPath.toLowerCase().includes('[linkedin')
  ) {
    return NextResponse.redirect('https://www.linkedin.com/company/agenor-services/', 301);
  }

  // Check for legacy global-stock-market-countdown
  if (pathname.includes('global-stock-market-countdown')) {
    return NextResponse.redirect(new URL('/', request.url), 301);
  }

  // Check for index.html / index.htm / index.php
  if (pathname === '/index.html' || pathname === '/index.htm' || pathname === '/index.php') {
    return NextResponse.redirect(new URL('/', request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static assets
     */
    '/((?!_next/static|_next/image|favicon.ico|logo.png|.*\\.svg$).*)',
  ],
};
