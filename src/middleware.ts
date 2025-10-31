import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('buyer_token')?.value;
  const { pathname, href } = request.nextUrl;

  // Redirect to login if unauthenticated on dashboard routes
  if (!token && pathname.startsWith('/dashboard')) {
    const loginUrl = new URL(
      `/login?redirect=${encodeURIComponent(href)}`,
      request.nextUrl.origin
    );
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
