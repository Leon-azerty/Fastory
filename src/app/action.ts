'use server'

import { fetchItems } from '@/lib/starwarsApi'
import { LeafType } from '@/lib/type'

export async function search(selected: string, name: string) {
  try {
    if (!name || !selected) {
      return { message: 'please re-try later', type: 'error' }
    }

    const items = await fetchItems(selected as LeafType, name)
    return { items, error: false }
  } catch (error) {
    return {
      message: 'Failed to search' + error,
      error: true,
    }
  }
}
