'use client'

import {
  FilmsType,
  LeafType,
  PeopleType,
  PlanetsType,
  SpeciesType,
  StarshipsType,
  VehiclesType,
} from '@/lib/type'
import { Table, TableBody, TableCaption } from '@/ui/table'
import { useState } from 'react'
import Filter from './filter'
import PaginationTable from './paginationTable'
import Row from './row'
import RowName from './rowName'

export default function StarwarsClient({
  ServerItems,
}: {
  ServerItems:
    | PeopleType
    | PlanetsType
    | FilmsType
    | SpeciesType
    | VehiclesType
    | StarshipsType
}) {
  const [selected, setSelected] = useState('people')
  const [items, setItems] = useState<
    | PeopleType
    | PlanetsType
    | FilmsType
    | SpeciesType
    | VehiclesType
    | StarshipsType
  >(ServerItems)

  return (
    <section className="flex">
      <Filter
        selected={selected}
        setSelected={setSelected}
        setItems={setItems}
      />
      <div className="flex flex-col">
        <Table>
          <RowName results={items.results} />
          <TableBody>
            <Row items={items} />
          </TableBody>
          <TableCaption>Total : {items.count}</TableCaption>
        </Table>
        <PaginationTable
          items={items}
          setItems={setItems}
          selected={selected as LeafType}
        />
      </div>
    </section>
  )
}
