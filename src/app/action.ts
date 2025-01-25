'use server'

import { getUser } from '@/lib/session'
import { revalidatePath } from 'next/cache'
import { FormResult, searchSchema } from './common/type'

export async function NameTmp(prevState: any, formdata: FormData) {
  try {
    const { name } = searchSchema.parse({
      name: formdata.get('name'),
    })

    const user = await getUser()
    if (user === null) {
      return { message: 'error', type: 'error' } as FormResult
    }

    if (!name) {
      return { message: 'name is required', type: 'error' } as FormResult
    }

    revalidatePath('/')

    return {
      message: 'Action successfull',
      type: 'success',
    } as FormResult
  } catch (error) {
    return {
      message: 'Failed to capture screenshot' + error,
      type: 'error',
    } as FormResult
  }
}
