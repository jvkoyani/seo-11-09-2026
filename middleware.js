import { NextResponse } from 'next/server';

// This middleware runs on the Edge for ultra-fast performance
// Used for caching headers, redirects, and request optimization

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Clone response for modifications
  const response = NextResponse.next();

  // Add cache headers based on content type
  if (pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|webp|avif)$/i)) {
    // Images: long cache (1 year)
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname.startsWith('/sitemap')) {
    // Sitemaps: cache for 1 day
    response.headers.set('Cache-Control', 'public, max-age=86400');
  } else if (pathname.startsWith('/_next/static')) {
    // Next.js static: cache forever
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname.startsWith('/api')) {
    // API routes: no cache
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  } else {
    // HTML pages: short cache + revalidation
    response.headers.set(
      'Cache-Control',
      'public, max-age=3600, stale-while-revalidate=86400'
    );
  }

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  // Add server timing header for performance debugging (disable in production if needed)
  if (process.env.NODE_ENV === 'development') {
    response.headers.set('Server-Timing', 'edge-processing;dur=0');
  }

  return response;
}

// Configure which routes use middleware
export const config = {
  matcher: [
    // Match all routes except static assets and Next.js internals
    '/((?!_next|__next|.*\\.json$).*)',
  ],
};
