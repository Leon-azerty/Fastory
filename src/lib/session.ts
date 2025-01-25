import prisma from '@lib/prisma'
import { compareSync } from 'bcrypt-ts'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = 'secret'
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key)
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

// --------------------------------------------------

export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  if (!compareSync(password, user.password)) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const expires = new Date(Date.now() + 10 * 1000)
  const session = await encrypt({ user, expires })

  const cookiesStore = await cookies()
  cookiesStore.set('session', session, { expires, httpOnly: true })
}

// --------------------------------------------------

export async function logout() {
  // Destroy the session
  const cookiesStore = await cookies()
  cookiesStore.set('session', '', { expires: new Date(0) })
}

export async function getSession() {
  const cookiesStore = await cookies()
  const session = cookiesStore.get('session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
  // const session = request.cookies.get('session')?.value
  const cookiesStore = await cookies()
  const session = cookiesStore.get('session')?.value
  if (!session)
    return NextResponse.json({ error: 'pas de session' }, { status: 401 })
  NextResponse.json({ error: 'session active ' }, { status: 401 })

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + 10 * 1000)
  const res = NextResponse.next()
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  })
  return res
}

export async function getUser() {
  const session = await getSession()
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  })
  return user
}
