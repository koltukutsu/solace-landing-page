import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Set this to false to disable maintenance mode
const MAINTENANCE_MODE = false;

// URLs that should be accessible during maintenance
const ALLOWED_PATHS = [
  '/under-maintenance',
  '/_next', // Allow Next.js resources
  '/favicon.ico',
  '/images', // Allow image assets
];

export function middleware(request: NextRequest) {
  // If maintenance mode is enabled and the path is not in allowed paths
  if (MAINTENANCE_MODE) {
    const path = request.nextUrl.pathname;
    
    // Check if the current path should be allowed
    const isAllowedPath = ALLOWED_PATHS.some(allowedPath => 
      path === allowedPath || path.startsWith(allowedPath + '/')
    );
    
    // If not an allowed path, redirect to maintenance page
    if (!isAllowedPath) {
      const url = request.nextUrl.clone();
      url.pathname = '/under-maintenance';
      return NextResponse.rewrite(url);
    }
  }
  
  return NextResponse.next();
}

// Configure the matcher to run the middleware on all routes
export const config = {
  matcher: [
    // Match all routes except API routes and static files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 

export default MAINTENANCE_MODE;
