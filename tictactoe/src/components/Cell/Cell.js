import React from 'react';

import './Cell.css';

// import and conver App.js then export
export const Cell = (props) => { // stop the cell content from populating everywhere.
  return ( 
    // adding the content of the cell plus the class populated
    <button className="cell">
              <span className="cell-content populated">{props.value}</span>
          </button>
  );
}


