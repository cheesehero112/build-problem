import React from 'react';
import './prices.css';

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
