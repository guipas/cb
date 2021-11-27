import { ICell } from "./Cell";
import { IQuality } from "./Grid/Grid";

export interface ICellElement {
    name: string;
    getQualityOutput: (
        cell: ICell, 
        neighbourQualities: IQuality[]
    ) => IQuality[];
}

export const Hospital: ICellElement = {
    name: 'Hospital',
    getQualityOutput() {
        return [{ code: 'health', value: 10 }];
    },
}

export const House: ICellElement = {
    name: 'House',
    getQualityOutput(cell, qualities: IQuality[]) {
        const health = qualities.find((q) => q.code === 'health')?.value || 0;
        
        return [{ code: 'wealth', value: health * 2 }];
    },
}