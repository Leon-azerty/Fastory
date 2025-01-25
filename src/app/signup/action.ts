'use server'

import prisma from '@lib/prisma'
import { genSaltSync, hashSync } from 'bcrypt-ts'
import { redirect } from 'next/navigation'
import { FormResult, loginSchema } from '../common/type'

export default async function signUp(prevState: any, formData: FormData) {
  try {
    const { name, password } = loginSchema.parse({
      name: formData.get('name'),
      password: formData.get('password'),
    })

    if (!name || !password) {
      return {
        message: 'Please fill all fields',
        type: 'error',
      } as FormResult
    }

    const salt = genSaltSync(10)
    const hash = hashSync(password, salt)

    const user = await prisma.user.create({
      data: {
        name,
        password: hash,
      },
    })

    if (!user) {
      return {
        message: 'Error during User creation',
        type: 'error',
      } as FormResult
    }
  } catch (error) {
    console.error('Error: ', error)
    return {
      message: 'Internal Server Error : ' + error,
      type: 'error',
    } as FormResult
  }
  redirect('/login')
}
