import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/ealani/.image-slots.state.json') {
    return NextResponse.json({});
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/ealani/:path*'],
};
