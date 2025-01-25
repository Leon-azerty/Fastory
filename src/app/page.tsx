import { fetchItems } from '@/lib/starwarsApi'
import { ItemProps } from '@/lib/type'
import StarwarsClient from './components/starwarsClient'

export default async function Home() {
  const items: ItemProps = {
    people: await fetchItems('people'),
    planets: await fetchItems('planets'),
    films: await fetchItems('films'),
    species: await fetchItems('species'),
    vehicles: await fetchItems('vehicles'),
    starships: await fetchItems('starships'),
  }

  return (
    <main className="flex min-h-screen justify-between p-24">
      <StarwarsClient items={items} />
    </main>
  )
}
