import {
  FilmsType,
  PeopleType,
  PlanetsType,
  SpeciesType,
  StarshipsType,
  VehiclesType,
} from '@/lib/type'
import { TableCell, TableRow } from '@/ui/table'

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
  return items.results.map((item: any, index) => (
    <TableRow key={index}>
      {Object.keys(item).map((key) => (
        <TableCell key={key}>{item[key]}</TableCell>
      ))}
    </TableRow>
  ))
}
