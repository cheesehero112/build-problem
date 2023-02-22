/*
### Button counter
- make an outer box that contains 3 boxes
- the boxes should be all the same sizes and horizontal
- each box should have a button in the center
- clicking on any of the buttons should increment the button counter of the parent
-----------------------------
Button Counter - {number of total clicks}
Box 1   Box 2   Box 3
btn 1   btn2	btn3
----------------------------- (edited) 
*/

import { useState } from 'react';
import { Box } from './Box';
import './app.css';

export function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className='container'>
      Counter: {counter}
      <div className='box-container'>
        <div className='box'>
          <p>Button 1</p>
          <button onClick={handleClick}>+</button>
        </div>
        <div className='box'>
          <p>Button 2</p>
          <button onClick={handleClick}>+</button>
        </div>
        <div className='box'>
          <p>Button 3</p>
          <button onClick={handleClick}>+</button>
        </div>
      </div>
    </div>
  );
}
