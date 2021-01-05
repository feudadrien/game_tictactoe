import React from 'react';
import { Cell } from '../Cell/Cell';

import './Board.css';

// import and conver App.js then export
// import cell buttons from cell component and duplicate
export const Board = () => {
  return ( 
    <div id="board">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
      </div>
  );
}


