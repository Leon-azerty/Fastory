import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/ui/dialog'

import {
  FilmsType,
  PeopleType,
  PlanetsType,
  SpeciesType,
  StarshipsType,
  VehiclesType,
} from '@/lib/type'
import { TableCell, TableRow } from '@/ui/table'
import Description from './description'
import Trigger from './trigger'

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
      <Dialog>
        {Object.keys(item).map((key) => (
          <TableCell key={key}>
            <Trigger data={item[key]} />
          </TableCell>
        ))}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{item.name}</DialogTitle>
            {Object.keys(item).map((key) => (
              <Description item={item[key]} key={key} prop={key} />
            ))}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </TableRow>
  ))
}
