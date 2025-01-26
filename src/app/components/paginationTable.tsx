'use client'

import { fetchItems } from '@/lib/starwarsApi'
import { LeafType } from '@/lib/type'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/ui/pagination'

export default function PaginationTable({
  items,
  setItems,
  selected,
}: {
  items: any
  setItems: (value: any) => void
  selected: LeafType
}) {
  const loadPage = async (url: string) => {
    console.log('loadPage', url)
    const urlParams = new URLSearchParams(url.split('?')[1])
    const page = urlParams.get('page') || '1'
    const tmp = await fetchItems({
      leaf: selected,
      page: page,
    })
    setItems(tmp)
  }
  return (
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
  )
}
