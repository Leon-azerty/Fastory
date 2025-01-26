'use client'

import { Button } from '@/ui/button'
import { Label } from '@/ui/label'
import { Input } from '@ui/input'
import { useState } from 'react'
import { toast } from 'sonner'
import { search } from '../action'

export default function SearchForm({
  selected,
  setSearchResult,
}: {
  selected: string
  setSearchResult: (value: any) => void
}) {
  const [name, setName] = useState('')

  const onSubmit = async () => {
    const res = await search(selected, name)

    if (!res) {
      toast.error('error during search, please try again later')
      return console.error('error during search, please try again later')
    }

    // @ts-ignore
    if (res.results && res.results.length === 0) {
      toast.info('No result found')
    }
    setSearchResult(res.results)
  }
  return (
    <div className="w-40 space-y-2">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          placeholder="anakin"
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
        />
        <div className="flex justify-end text-sm text-muted-foreground underline">
          <p
            onClick={() => {
              setSearchResult([])
              setName('')
            }}
            className="cursor-pointer"
          >
            Clear
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <Button onClick={onSubmit}>Search</Button>
      </div>
    </div>
  )
}
