'use client'

import { FormResult, searchSchema } from '@/app/common/type'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/form'
import { Input } from '@ui/input'
import { useActionState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { NameTmp } from '../action'
import SubmitButton from '../common/submitButton'

const initialState: FormResult = {
  type: undefined,
  message: '',
}

export default function SearchForm() {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      name: '',
    },
  })

  const [state, formAction] = useActionState(NameTmp, initialState)

  if (state.type) {
    if (state.type === 'error') {
      toast.error('error during upload: ' + state.message)
    } else if (state.type === 'success') {
      toast.success('card added succesfully: ' + state.message)
    }
    state.type = undefined
  }
  return (
    <>
      <Form {...form}>
        <form action={formAction} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input placeholder="anakin" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of the character/movie.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton text="Submit" />
        </form>
      </Form>
    </>
  )
}
