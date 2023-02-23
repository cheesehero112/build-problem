import React from 'react';

export const Box = ({ incrementCounter }) => {
  return (
    // make a use of sections tag
    <section className='box-container'>
      <div className='box'>
        <p>Button 1</p>
        <button
          onClick={incrementCounter}
          // myattribute={5}
        >
          +
        </button>
      </div>
      <div className='box'>
        <p>Button 2</p>
        <button onClick={incrementCounter}>+</button>
      </div>
      <div className='box'>
        <p>Button 3</p>
        <button onClick={incrementCounter}>+</button>
      </div>
    </section>
  );
};
