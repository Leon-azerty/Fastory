import { LeafType, LeafTypeMap } from './type'

const BASE_URL = 'https://swapi.dev/api'

export async function fetchItems<T extends LeafType>(
  leaf: T,
  search?: string,
): Promise<LeafTypeMap[T]> {
  const url = search
    ? `${BASE_URL}/${leaf}/?search=${search}`
    : `${BASE_URL}/${leaf}/`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const data = await res.json()
  return data.results
}
