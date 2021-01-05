import React from 'react';
import classNames from 'classnames'

import './ResultModal.css';

// import and conver App.js then export
// import cell buttons from cell component and duplicate
export const ResultModal = (props) => {
    const ResultModalClasses = classNames({'modal-open': props.isGameOver
});
 

  return ( 
    <div id="modal-overlay" className={ResultModalClasses }>
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


