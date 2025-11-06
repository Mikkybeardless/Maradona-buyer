import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // ✅ Get the session token from cookies
    const token = req.cookies.get('buyer_token')?.value;

    if (!token) {
      return NextResponse.json(
        { authenticated: false, message: 'No active session found' },
        { status: 401 }
      );
    }

    // ✅ If cookie exists, user is authenticated
    return NextResponse.json(
      { authenticated: true, message: 'Session active' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Session check error:', error);
    return NextResponse.json(
      { authenticated: false, message: 'Error checking session' },
      { status: 500 }
    );
  }
}
