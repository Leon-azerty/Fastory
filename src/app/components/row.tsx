import {
  FilmsType,
  PeopleType,
  PlanetsType,
  SpeciesType,
  StarshipsType,
  VehiclesType,
} from '@/lib/type'
import { TableCell, TableRow } from '@/ui/table'
import { ExternalLink } from 'lucide-react'

export default function Row({
  items,
}: {
  items:
    | PeopleType
    | PlanetsType
    | FilmsType
    | SpeciesType
    | VehiclesType
    | StarshipsType
}) {
  console.log(items.results)
  return items.results.map((item: any, index) => (
    <TableRow key={index}>
      {Object.keys(item).map((key) => (
        <TableCell key={key}>
          {typeof item[key] == 'string' ? (
            item[key].substring(0, 10)
          ) : (
            <ExternalLink />
          )}
        </TableCell>
      ))}
    </TableRow>
  ))
}
