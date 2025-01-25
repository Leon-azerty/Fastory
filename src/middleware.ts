import { updateSession } from '@/lib/session'
import { type NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
  let session = request.cookies.get('session')

  if (!session) return Response.redirect(new URL('/login', request.url))

  return await updateSession(request)
}

export const config = {
  matcher: ['/'],
}
