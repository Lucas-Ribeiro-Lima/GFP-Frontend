import { NextRequest, NextResponse as response } from "next/server"; 

export function middleware(request: NextRequest) {
  const session = request.cookies.get('SSID')

  return session 
            ? response.rewrite(new URL("/dashboard", request.url)) 
            : response.rewrite(new URL('/login', request.url))
}

export const config = {
  matcher: ['/', '/dashboard', '/preferencias', '/rendas', '/despesas'],
}