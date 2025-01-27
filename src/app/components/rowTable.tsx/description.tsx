import { DialogDescription } from '@/ui/dialog'

export default function Description({
  item,
  prop,
}: {
  item: string | string[]
  prop: string
}) {
  if (typeof item == 'string') {
    return (
      <DialogDescription key={prop}>
        {prop}:{item}
      </DialogDescription>
    )
  } else if (Array.isArray(item)) {
    return (
      <div key={prop}>
        <DialogDescription>{prop} :</DialogDescription>
        {item.map((i, index) => (
          <DialogDescription key={index}>{i}</DialogDescription>
        ))}
      </div>
    )
  }
}
