import { ICell, isSameCell } from "../Cell";
import { ICellElement } from "../CellElement";
import { IGrid } from "./Grid";


export function addElementToCell(grid: IGrid, cell: ICell, element: ICellElement): IGrid {
  return {
    ...grid,
    cells: grid.cells.map(row => {
      return row.map(c => {
        return {
          ...c,
          element: isSameCell(c, cell) ? element : c.element,
          elementDOB: isSameCell(c, cell) ? 0 : c.elementDOB,
        };
      })
    })
  };
}