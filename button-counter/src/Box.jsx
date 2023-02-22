import React from 'react';

export const Box = (props) => {
  return (
    <div className='box'>
      <button onClick={props}>increment</button>
    </div>
  );
};
