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

  return (
    <section className="flex">
      <Filter setSelected={setSelected} />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items[selected].map((item, index) => (
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
