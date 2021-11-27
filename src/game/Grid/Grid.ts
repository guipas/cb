import { ICell } from "../Cell";
import { ICellElement } from "../CellElement";

export interface IQuality {
  code?: string;
  value: number;
}


export type CellMap = Record<string, ICell>;

export interface IGrid {
  width: number;
  height: number;
  cells: ICell[][];
  // cellsMap: CellMap;
}
