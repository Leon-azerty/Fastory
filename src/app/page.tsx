import { fetchItems } from '@/lib/starwarsApi'
import StarwarsClient from './components/starwarsClient'

export default async function Home() {
  const items = await fetchItems({ leaf: 'people' })

  return (
    <main className="flex min-h-screen justify-between p-24">
      <StarwarsClient ServerItems={items} />
    </main>
  )
}
