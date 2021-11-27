import React, { useEffect, useState } from 'react';
import { cellsMapId, createGrid } from '../game/Grid/createGrid';
import { ICellStates } from '../game/step';
import { IGrid } from '../game/Grid/Grid';

import { step as gameStep } from '../game/step';

export const Grid: React.FC = () => {
  const [grid, setGrid] = useState<IGrid | null>(null);
  const [stepState, setStepState] = useState<ICellStates>({});

  useEffect(() => {
    createGrid().then(setGrid);
  }, []);

  const step = () => {
    if (grid) {
      const nextStepState = gameStep(grid, stepState);
      setStepState(nextStepState);
    }
  };

  const display = (x: any) => {
    try {
      return JSON.stringify(x, null, 2);
    } catch (e) {
      return '-';
    }
  };

  return (
    <div>
      <div>
        {grid?.cells.map((row) => {
          return (
            <div className="flex">
              {row.map((cell) => {
                const cellState = stepState[cellsMapId(cell.x, cell.y)];
                return (
                  <div
                    className="border m-2 p-1 text-xs"
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  >
                    {`${cell.x}x${cell.y}`}
                    <div>{cell.element?.name}</div>
                    <div>{display(cellState?.qualityOutput)}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="bg-blue-500 rounded p-2 m-2 text-white"
          onClick={step}
        >
          step
        </button>
      </div>
    </div>
  );
};
