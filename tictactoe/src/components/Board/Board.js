import React from 'react';
import { Cell } from '../Cell/Cell';

import './Board.css';

// import and conver App.js then export
// import cell buttons from cell component and duplicate
export const Board = () => {
  return ( 
    <div id="board">
          <Cell value="0" canHighlight={false}/>
          <Cell value="X" canHighlight={false}/>
          <Cell value="X" canHighlight={true}/>
          <Cell value="0" canHighlight={false}/>
          <Cell value="X" canHighlight={true}/>
          <Cell value="X" canHighlight={false}/>
          <Cell value="X" canHighlight={true}/>
          <Cell value="0" canHighlight={false}/>
          <Cell value="X" canHighlight={false}/>
      </div>
  );
}


