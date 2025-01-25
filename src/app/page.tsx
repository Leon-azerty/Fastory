import { fetchItems } from '@/lib/starwarsApi'
import UploadForm from './components/upload-form'

export default async function Home() {
  const items = await fetchItems('people')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello from main
      <UploadForm />
    </main>
  )
}
