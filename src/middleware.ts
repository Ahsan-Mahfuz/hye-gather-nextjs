import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  console.log("aad ad ad ad ad ");
  const isAuthenticated = req.cookies.get('auth_token')
  console.log(isAuthenticated)
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/home', req.url))
  } 
  // else if (isAuthenticated === 'vendor') {
  //   return NextResponse.redirect(new URL('/home', req.url))
  // }
  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
