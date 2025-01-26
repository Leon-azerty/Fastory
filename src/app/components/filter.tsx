'use client'

import { fetchItems } from '@/lib/starwarsApi'
import { LeafType } from '@/lib/type'
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
  selected,
  setSelected,
  setItems,
}: {
  selected: string
  setSelected: (value: string) => void
  setItems: (value: any) => void
}) {
  const handleOnValueChange = async (value: string) => {
    console.log('value', value)
    setSelected(value)
    const items = await fetchItems({ leaf: value as LeafType })
    setItems(items)
  }

  return (
    <Card className="w-[200px]">
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <SearchForm selected={selected} setSearchResult={setItems} />
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
