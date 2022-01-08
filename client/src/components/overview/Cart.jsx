import React, { useState } from 'react';

import { CartWrapper, AddCartButton } from '../../../dist/overviewStyling.js';
import { postCart } from '../../shared/api.js';

export const Cart = (props) => {
  const [OutOfStock, setOutOfStock] = useState(false);
  const [Size, setSize] = useState('Select Size');
  const [Quantity, setQuantity] = useState('Select Quantity');

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

  const SizeMenu = (
    <select onChange={() => {setSize(event.target.value)}} className="select-menu">
      <option key="0" value={null}>Select Size</option>
      {SKU.map((sku) => <option value={sku.size} key={sku.sku_id} >{sku.size}</option>)}
    </select>
  )
  const QuantityMenu = (
    <select onChange={() => {setQuantity(event.target.value)}} className="select-menu">
      <option key="0">Select Quantity</option>
      {maxQty.map((qty) => <option value={qty} key={qty}>{qty}</option>)}
    </select>
  )
  if (Size === 'Select Size') {
    return (
      <CartWrapper>
        {SizeMenu}
      </CartWrapper>
    )
  }

  if (Size !== 'Select Size' && Quantity === 'Select Quantity') {
    return (
      <CartWrapper>
        {SizeMenu}
        {QuantityMenu}
      </CartWrapper>
    )
  }
  return (
    <CartWrapper>
      {SizeMenu}
      {QuantityMenu}
      <AddCartButton
        onClick= {() => {
          postCart({ sku_id: currentSKU, count: Quantity })
            .then((results) => {
              console.log('Cart Created', results);
            })
            .catch((error) => {
              console.log(error)
            })
        }}
      >
        Add To Cart
      </AddCartButton>
    </CartWrapper>
  )
};
