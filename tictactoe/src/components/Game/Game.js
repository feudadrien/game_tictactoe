import React, { useState} from 'react';

import { Board } from '../Board/Board';
import './Game.css';

// import and conver App.js then export
// replace the board div with the baord component.
export const Game = () => {
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [xIsNext, setXIsNext] = useState(true);
    const winningCombination = [];

    // lock the cell after clicking once
    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const onCellClicked = (cellIndex) => {
        if (isCellEmpty(cellIndex)) {
        const newCellValues = [...cellValues];
       newCellValues[cellIndex] = xIsNext? 'X': '0';
       setCellValues(newCellValues);
       setXIsNext(!xIsNext);
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

  <div id="modal-overlay">
      <div id="game-result-modal">
          <div id="result-container">
              <div id="winner-container">
                  <span></span>
              </div>
          </div>
          <div id="new-game-container">
              <button id="new-game-button">Start New Game</button>
          </div>
      </div>
  </div>
  </>
  );
}


