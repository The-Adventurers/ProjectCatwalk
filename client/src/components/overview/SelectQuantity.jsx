import React from 'react';

export const SelectQuantity = (props) => {
  const maxQty = [];
  for (let i = 1; i < props.availableQty + 1 ; i++) {
    if(i === 16) {
      break;
    }
    maxQty.push(i);
  }

  return (
    <select onChange={() => {props.setQuantity(event.target.value)}}>
      <option> - </option>
      {maxQty.map((qty) => <option value={qty} key={qty}>{qty}</option>)}
    </select>
  )
};
