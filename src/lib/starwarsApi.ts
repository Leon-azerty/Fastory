import { ItemProps, LeafType } from './type'

const BASE_URL = 'https://swapi.dev/api'

export async function fetchItems<T extends LeafType>({
  leaf,
  page,
  search,
}: {
  leaf: T
  page?: string
  search?: string
}): Promise<ItemProps[T]> {
  const url = new URL(`${BASE_URL}/${leaf}/`)
  if (search) {
    url.searchParams.append('search', search)
  }
  if (page) {
    url.searchParams.append('page', page)
  }

  console.log('url to fetch', url)

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const data = await res.json()
  return data as ItemProps[T]
}
