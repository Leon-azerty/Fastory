import { TableHead, TableHeader, TableRow } from '@/ui/table'

export default function RowName({ results }: { results: any }) {
  return (
    <TableHeader>
      <TableRow>
        {Object.keys(results[0]).map((key) => (
          <TableHead key={key}>{key}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  )
}
