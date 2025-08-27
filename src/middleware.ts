// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Attach the current path to a header so you can read it in the Layout
  const response = NextResponse.next();

  response.headers.set(
    'x-current-path',
    request.nextUrl.pathname + request.nextUrl.search
  );

  return response;
}

// Run this middleware on all routes (or narrow it if you want)
export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};
