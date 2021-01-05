import React from 'react';
import { Cell } from '../Cell/Cell';

import './Board.css';

// import and conver App.js then export
// import cell buttons from cell component and duplicate
export const Board = () => {

  const cellValues = ['0', 'X', 'X', '0', 'X', 'X', 'X', '0', 'X'];
  const cells = cellValues.map((value, index) =>
    <Cell key={index} value={value} canHighlight={false} />
  );
  return ( 
    <div id="board">
          {cells}
      </div>
  );
}


