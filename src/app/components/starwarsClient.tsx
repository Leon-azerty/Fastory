'use client'

import { fetchItems } from '@/lib/starwarsApi'
import {
  FilmsType,
  LeafType,
  PeopleType,
  PlanetsType,
  SpeciesType,
  StarshipsType,
  VehiclesType,
} from '@/lib/type'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/ui/pagination'
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
  const [searchResult, setSearchResult] = useState<any[]>([])
  const [items, setItems] = useState<
    | PeopleType
    | PlanetsType
    | FilmsType
    | SpeciesType
    | VehiclesType
    | StarshipsType
  >(ServerItems)

  const loadPage = async (url: string) => {
    console.log('loadPage', url)
    const urlParams = new URLSearchParams(url.split('?')[1])
    const page = urlParams.get('page') || '1'
    const tmp = await fetchItems({
      leaf: selected as LeafType,
      page: page,
    })
    setItems(tmp)
  }

  return (
    <section className="flex">
      <Filter
        selected={selected}
        setSelected={setSelected}
        setSearchResult={setSearchResult}
        setItems={setItems}
      />
      <div className="flex flex-col">
        <p>Total : {items.count}</p>
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
              : // @ts-ignore
                items.results.map((item: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {item.name ? item.name : item.title}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <Pagination>
          <PaginationContent>
            {items.previous ? (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => {
                    loadPage(items.previous)
                  }}
                />
              </PaginationItem>
            ) : null}
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  console.log('load first page')
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            {items.next ? (
              <PaginationItem>
                <PaginationNext
                  onClick={() => {
                    loadPage(items.next)
                  }}
                />
              </PaginationItem>
            ) : null}
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  )
}
