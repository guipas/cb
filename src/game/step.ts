import { cellsMapId, getCellMap } from './Grid/createGrid';
import { stepCell, ICell } from './Cell';
import { CellMap, IGrid, IQuality } from './Grid/Grid';



export type ICellStates = Record<string, ICell>;

export function step(grid: IGrid, cellStates: ICellStates = {}): ICellStates {
  const cellsMap: CellMap = {};
  const newCellStates: ICellStates = {};

  grid.cells.forEach((row) => {
    return row.forEach((cell) => {
      const neighbours = getNeighbors(grid, cell);

      // let the shit show begin
      const externalQualities: IQuality[] = [];
      neighbours.forEach((n) => {
        if (n) {
          const state = cellStates[cellsMapId(n.x, n.y)];
          const shine = state?.qualityOutput || [];
          externalQualities.push(...shine);
        }
      });

      const newCell: ICell = stepCell(cell, externalQualities);

      newCellStates[cellsMapId(cell.x, cell.y)] = newCell;
    });
  });

  return newCellStates;
}

function getNeighbors(grid: IGrid, cell: ICell): ICell[] {
  const cellsMap = getCellMap(grid);
  return [
    cellsMap[cellsMapId(cell.x - 1, cell.y)],
    cellsMap[cellsMapId(cell.x - 1, cell.y - 1)],
    cellsMap[cellsMapId(cell.x, cell.y - 1)],
    cellsMap[cellsMapId(cell.x + 1, cell.y - 1)],
    cellsMap[cellsMapId(cell.x + 1, cell.y)],
    cellsMap[cellsMapId(cell.x + 1, cell.y + 1)],
    cellsMap[cellsMapId(cell.x, cell.y + 1)],
    cellsMap[cellsMapId(cell.x - 1, cell.y + 1)],
  ];
}
