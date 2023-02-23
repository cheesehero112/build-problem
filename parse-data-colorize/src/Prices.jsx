import React from 'react';
import './prices.css';
// If object, order is not guaranteed - make sure to ask about the order
// if it's a good API design, if order matters, it should come in an array.
const data = {
  1: -1234,
  2: 23478,
  3: 2,
  4: 555,
  5: -1000,
};
let classNameColor = '';
export const Prices = () => {
  const priceList = Object.keys(data).map((key) => {
    if (data[key] > 0) {
      classNameColor = 'priceGreen';
    } else {
      classNameColor = 'priceRed';
    }

    return (
      <li
        className={classNameColor}
        key={key}
      >{`${key}: $${data[key]}`}</li>
    );
  });

  return priceList;
};
