import React from 'react';

import './ResultModal.css';

// import and conver App.js then export
// import cell buttons from cell component and duplicate
export const ResultModal = () => {
 

  return ( 
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
  );
}


