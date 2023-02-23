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

import { useState, useCallback } from 'react';
import { Box } from './Box';
import './app.css';

export function App() {
  const [counter, setCounter] = useState(0);
  // memoized function
  const handleClick = useCallback(() => {
    setCounter((c) => c + 1);
  }, [counter]);

  return (
    <div className='container'>
      Counter: {counter}
      <Box incrementCounter={handleClick} />
    </div>
  );
}

// <div className='box'>
//       <p>Button 1</p>
//       <Box onClick={handleClick} />
//     </div>
//     <div className='box'>
//       <p>Button 2</p>
//       <Box onClick={handleClick} />
//     </div>
//     <div className='box'>
//       <p>Button 3</p>
//       <Box onClick={handleClick} />
//     </div>

// Here is a way to create an array of Box components using a while loop

// const boxArr = [];
// let index = 1;
// while (index <= 3) {
//   boxArr.push(
//     <div
//       className='box'
//       key={index}
//     >
//       <p>{`Button ${index}`}</p>
//       <Box onClick={handleClick} />
//     </div>
//   );
//   index++;
// }
// return (<div>{boxArr}</div>)

// then render {boxArr} in the return
