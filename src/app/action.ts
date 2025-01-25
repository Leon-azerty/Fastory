'use server'

import { getUser } from '@/lib/session'
import { revalidatePath } from 'next/cache'
import { FormResult, uploadSchema } from './common/type'

export async function NameTmp(prevState: any, formdata: FormData) {
  try {
    const { url } = uploadSchema.parse({
      url: formdata.get('url'),
    })

    const user = await getUser()
    if (user === null) {
      return { message: 'error', type: 'error' } as FormResult
    }

    if (!url) {
      return { message: 'URL is required', type: 'error' } as FormResult
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
