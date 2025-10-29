import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // const url = request.nextUrl;
  const token = request.cookies.get('buyer_token')?.value;

  const { pathname, href } = request.nextUrl;

  if (!token && pathname.startsWith('/dashboard')) {
    const loginUrl = new URL(
      `/login?redirect=${encodeURIComponent(href)}`,
      request.url
    );
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Protects dashboard routes
};
