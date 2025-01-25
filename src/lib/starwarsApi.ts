const BASE_URL = 'https://swapi.dev/api'

type LeafType =
  | 'people'
  | 'planets'
  | 'films'
  | 'species'
  | 'vehicles'
  | 'starships'

export async function fetchItems(leaf: LeafType) {
  const res = await fetch(`${BASE_URL}/${leaf}/`)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const data = await res.json()
  console.log('data', data)
  return data
}
