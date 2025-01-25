'use client'

import { Button } from '@/ui/button'
import { Label } from '@/ui/label'
import { Input } from '@ui/input'
import { useState } from 'react'
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
    console.log('res', res)
    setSearchResult(res)
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
        />
      </div>
      <div className="flex justify-end">
        <Button onClick={onSubmit}>Search</Button>
      </div>
    </div>
  )
}
