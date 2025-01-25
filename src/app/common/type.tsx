import { z } from 'zod'

export const loginSchema = z.object({
  name: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
})
export type FormResult = {
  type: 'error' | 'success' | undefined
  message: string
}
