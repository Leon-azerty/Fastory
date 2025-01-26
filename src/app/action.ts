'use server'

import { fetchItems } from '@/lib/starwarsApi'
import { LeafType } from '@/lib/type'

export async function search(selected: string, name: string) {
  try {
    if (!name || !selected) {
      return null
    }

    const items = await fetchItems({ leaf: selected as LeafType, search: name })
    return {
      next: items.next,
      count: items.count,
      previous: items.previous,
      results: items.results,
    }
  } catch (error) {
    return null
  }
}
