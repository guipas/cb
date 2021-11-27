import { ICell } from '../Cell';
import { Hospital, House } from '../CellElement';
import { addElementToCell } from './addElement';
import { CellMap, IGrid } from './Grid';

export async function createGrid(): Promise<IGrid> {
  const width = 6;
  const height = 6;

  const cells = Array.from({ length: width }).map((_, y) => {
    return Array.from({ length: height }).map((_, x) => {
      const cell: ICell = {
        x,
        y,
      };

      return cell;
    });
    // console.log(i);
  });

  let grid = {
    cells,
    width,
    height,
  };

  // cells[2][2].element = Hospital;
  // cells[2][3].element = House;
  grid = addElementToCell(grid, cells[3][2], Hospital);
  grid = addElementToCell(grid, cells[3][3], House);

  console.log('grid:', grid);


  return grid;
}

export const cellsMapId = (x: number, y: number): string => `${x}__${y}`;
export const getCellMap = (grid: IGrid): CellMap => {
  const cellsMap: CellMap = {};
  grid.cells.forEach((row) => {
    return row.forEach((c) => {
      cellsMap[cellsMapId(c.x, c.y)] = c;
    });
  });

  return cellsMap;
}
