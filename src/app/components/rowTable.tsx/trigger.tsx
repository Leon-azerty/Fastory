import { DialogTrigger } from '@/ui/dialog'
import { ExternalLink } from 'lucide-react'

export default function Trigger({
  data,
}: {
  data: string | number | string[]
}) {
  if (typeof data === 'string') {
    return <DialogTrigger>{data.substring(0, 10)}</DialogTrigger>
  } else if (typeof data === 'number') {
    return <DialogTrigger>{data}</DialogTrigger>
  } else {
    return (
      <DialogTrigger>
        <ExternalLink />
      </DialogTrigger>
    )
  }
}
