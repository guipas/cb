import { ICellElement } from "./CellElement";
import { IQuality } from "./Grid/Grid";

export interface ICell {
  x: number;
  y: number;
  z?: number;
  
  element?: ICellElement;
  elementDOB?: number;
  qualityOutput?: IQuality[];
}

export function stepCell(
  cell: ICell,
  externalQualities: IQuality[],
): ICell {
  return {
    ...cell,
    qualityOutput: cell.element?.getQualityOutput(cell, externalQualities) || [], 
  };
}

export function isSameCell(cellA: ICell, cellB: ICell): boolean {
  return cellA?.x === cellB.x && cellA.y === cellB.y && cellA.z === cellB.z;
}