import React, { useState} from 'react';

import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import './Game.css';

// import and conver App.js then export
// replace the board div with the baord component.
export const Game = () => {
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const winningCombination = [];

    // lock the cell after clicking once
    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const onCellClicked = (cellIndex) => {
        if (isCellEmpty(cellIndex)) {
        const newCellValues = [...cellValues];

        // calculate result

       

       newCellValues[cellIndex] = xIsNext? 'X': '0';
       setCellValues(newCellValues);
       setXIsNext(!xIsNext);
       setIsGameOver(true);
        }
      };

  return ( 
    <> 
    <div id="game">
      <h1>Tic Tac Toe</h1>
      <Board 
      cellValues={cellValues}
      winningCombination={winningCombination}
      cellClicked={onCellClicked}
     
      />
  </div>

  <ResultModal 
   isGameOver={isGameOver}/>
  </>
  );
}


