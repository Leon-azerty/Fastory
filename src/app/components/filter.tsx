'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/ui/card'
import { Label } from '@/ui/label'
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group'
import SearchForm from './search-form'

export default function Filter({
  setSelected,
}: {
  setSelected: (value: string) => void
}) {
  const handleOnValueChange = (value: string) => {
    console.log('value', value)
    setSelected(value)
  }
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <SearchForm />
        <RadioGroup defaultValue="people" onValueChange={handleOnValueChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="people" id="people" />
            <Label htmlFor="people">People</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="vehicles" id="vehicles" />
            <Label htmlFor="vehicles">Vehicles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="starships" id="starships" />
            <Label htmlFor="starships">Starships</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="films" id="films" />
            <Label htmlFor="films">Films</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="species" id="species" />
            <Label htmlFor="species">Species</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="planets" id="planets" />
            <Label htmlFor="planets">Planets</Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
