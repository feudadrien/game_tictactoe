import React from 'react';
import { Cell } from '../Cell/Cell';

import './Board.css';

// import and conver App.js then export
// import cell buttons from cell component and duplicate
export const Board = () => {

  const cellValues = ['0', 'X', 'X', '0', 'X', 'X', 'X', '0', 'X'];
  const winningCombination = [2, 4, 6];
  const cells = cellValues.map((value, index) => {
    const canHighlight = winningCombination && 
                         winningCombination.indexOf(index) >= 0; // or 0
   return  <Cell 
   key={index} 
   value={value} 
   canHighlight={canHighlight } 
   />
});
  return ( 
    <div id="board">
          {cells}
      </div>
  );
}


