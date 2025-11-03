import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('buyer_token')?.value;
  const { pathname, search } = request.nextUrl;

  // Only check auth for dashboard routes
  if (!token && pathname.startsWith('/dashboard')) {
    // Use pathname + search instead of full href
    const redirectPath = pathname + search;
    const loginUrl = new URL(
      `/login?redirect=${encodeURIComponent(redirectPath)}`,
      request.url
    );
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    // Optionally add the root dashboard path explicitly
    '/dashboard',
  ],
};
