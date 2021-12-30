import React from 'react';

export const SelectQuantity = (props) => {
  const maxQty = ['-'];
  for (let i = 1; i < props.availableQty + 1 ; i++) {
    if(i === 16) {
      break;
    }
    maxQty.push(i);
  }

  return (
    <select onChange={() => {props.setQuantity(event.target.value)}}>
      {maxQty.map((qty) => <option value={qty}>{qty}</option>)}
    </select>
  )
}