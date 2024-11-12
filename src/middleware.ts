import { NextRequest, NextResponse as response } from "next/server"; 

export function middleware(request: NextRequest) {
  const session = request.cookies.get('SSID')

  return session 
            ? null
            : response.rewrite(new URL('/login', request.url))
}

export const config = {
  matcher: ['/', '/dashboard', '/preferencias', '/registros/:path*'],
}