'use client'

import { ItemProps } from '@/lib/type'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table'
import { useState } from 'react'
import Filter from './filter'

export default function StarwarsClient({ items }: { items: ItemProps }) {
  const [selected, setSelected] = useState('people')
  const [searchResult, setSearchResult] = useState<any[]>([])

  return (
    <section className="flex">
      <Filter
        selected={selected}
        setSelected={setSelected}
        setSearchResult={setSearchResult}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {searchResult.length > 0
            ? searchResult.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {item.name ? item.name : item.title}
                  </TableCell>
                </TableRow>
              ))
            : items[selected].map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {item.name ? item.name : item.title}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </section>
  )
}
