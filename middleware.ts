import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/api/admin')) {
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      if (user === process.env.TNSA_ADMIN_ID && pwd === process.env.TNSA_ADMIN_PASS) {
        return NextResponse.next();
      }
    }
    url.pathname = '/api/auth';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
