import React, { useState} from 'react';
import { calculateWinner } from '../../utils/WinnerCalculator';

import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import './Game.css';

// import and conver App.js then export
// replace the board div with the baord component.
export const Game = () => {
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const [numberOfTurnsLeft, setNumberOfTurnsLeft] = useState(9);

    const winningCombination = [];

    // lock the cell after clicking once
    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const onCellClicked = (cellIndex) => {
        if (isCellEmpty(cellIndex)) {
        const newCellValues = [...cellValues];
        newCellValues[cellIndex] = xIsNext? 'X': '0';
        const newNumberOfTurnsLeft = numberOfTurnsLeft - 1;
        // calculate result
    const calcResult = calculateWinner(newCellValues, newNumberOfTurnsLeft, cellIndex);
       
 
      
       setCellValues(newCellValues);
       setXIsNext(!xIsNext);
       setIsGameOver(calcResult.hasResult);
       setNumberOfTurnsLeft(newNumberOfTurnsLeft);
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


