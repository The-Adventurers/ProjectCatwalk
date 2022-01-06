import React, { useState } from 'react';

import { CartWrapper, AddCartButton } from '../../../dist/overviewStyling.js';
import { postCart } from '../../shared/api.js';


export const Cart = (props) => {
  const [OutOfStock, setOutOfStock] = useState(false);
  const [Size, setSize] = useState(null);
  const [Quantity, setQuantity] = useState(null);

  const SKU = [];
  let availableQty = 0;
  let currentSKU;
  for (let k in props.style.skus) {
    const newObject = {
      sku_id: k,
      size: props.style.skus[k].size,
      quantity: props.style.skus[k].quantity
    }
    if (Size === newObject.size) {
      availableQty = newObject.quantity;
      currentSKU = newObject.sku_id;
    }
    SKU.push(newObject)
  }

  const maxQty = [];
  for (let i = 1; i < availableQty + 1 ; i++) {
    if(i === 16) {
      break;
    }
    maxQty.push(i);
  }

  if (Size === null) {
    return (
      <CartWrapper>
        <select onChange={() => {setSize(event.target.value)}}>
          <option key="0">Select Size</option>
          {SKU.map((sku) => <option value={sku.size} key={sku.sku_id}>{sku.size}</option>)}
        </select>
      </CartWrapper>
    )
  }

  if (Size !== null && Quantity === null) {
    return (
      <CartWrapper>
        <select onChange={() => {setSize(event.target.value)}}>
          <option key="0">Select Size</option>
          {SKU.map((sku) => <option value={sku.size} key={sku.sku_id}>{sku.size}</option>)}
        </select>
        <select onChange={() => {setQuantity(event.target.value)}}>
          <option> - </option>
          {maxQty.map((qty) => <option value={qty} key={qty}>{qty}</option>)}
        </select>
      </CartWrapper>
    )
  }
  return (
    <CartWrapper>
      <select onChange={() => {setSize(event.target.value)}}>
        <option key="0">Select Size</option>
        {SKU.map((sku) => <option value={sku.size} key={sku.sku_id}>{sku.size}</option>)}
      </select>
      <select onChange={() => {setQuantity(event.target.value)}}>
        <option> - </option>
        {maxQty.map((qty) => <option value={qty} key={qty}>{qty}</option>)}
      </select>
      <AddCartButton onClick= {() => {
        postCart({ sku_id: currentSKU, count: Quantity })
          .then((results) => {
            console.log('Cart Created', results);
          })
          .catch((error) => {
            console.log(error)
          })
        }}>Add To Cart</AddCartButton>
    </CartWrapper>
  )
};
