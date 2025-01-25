import { LeafType, LeafTypeMap } from './type'

const BASE_URL = 'https://swapi.dev/api'

export async function fetchItems<T extends LeafType>(
  leaf: T,
): Promise<LeafTypeMap[T]> {
  const res = await fetch(`${BASE_URL}/${leaf}/`)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const data = await res.json()
  console.log('data', data)
  return data.results
}
