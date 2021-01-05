import React from 'react';
import classNames from 'classnames';

import './Cell.css';

// import and conver App.js then export
export const Cell = (props) => { 

   
    const cellClasses = classNames ({
        cell: true, 
        winner: props.canHighlight

    });

    const cellContentClasses = classNames ({
        'cell-content': true, 
        populated: props.value

    });
    
   
  return ( 
    // adding the content of the cell plus the class populated
    // winner class from CSS
    <button className={cellClasses}>
              <span className={cellContentClasses}>{props.value}</span>
          </button>
  );
}


