import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authenticate } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const user = authenticate(request);

  // if (!user && !request.url.includes('/api/auth/login')) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  return NextResponse.next();
}