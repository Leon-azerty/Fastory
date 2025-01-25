import { fetchItems } from '@/lib/starwarsApi'
import { ItemProps } from '@/lib/type'
import StarwarsClient from './components/starwarsClient'

export default async function Home() {
  const [people, planets, films, species, vehicles, starships] =
    await Promise.all([
      fetchItems('people'),
      fetchItems('planets'),
      fetchItems('films'),
      fetchItems('species'),
      fetchItems('vehicles'),
      fetchItems('starships'),
    ])

  const items: ItemProps = {
    people,
    planets,
    films,
    species,
    vehicles,
    starships,
  }

  return (
    <main className="flex min-h-screen justify-between p-24">
      <StarwarsClient items={items} />
    </main>
  )
}
