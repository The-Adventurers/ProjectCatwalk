import React from 'react';

export const SelectSize = (props) => {
  return (
    <select onChange={() => {props.setSize(event.target.value)}}>
      {props.sku.map((sku) => <option value={sku.size} key={sku.sku_id}>{sku.size}</option>)}
    </select>
  )
}