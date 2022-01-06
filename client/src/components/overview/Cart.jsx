import React, { useState } from 'react';

import { CartWrapper, AddCartButton } from '../../../dist/overviewStyling.js';
import { SelectSize } from './SelectSize.jsx';
import { SelectQuantity } from './SelectQuantity.jsx'
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
  const handleChange = () => {
    postCart({ sku_id: currentSKU, count: Quantity })
      .then((results) => {
        console.log('Cart Created', results);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (Size === null) {
    return (
      <CartWrapper>
        <SelectSize size={ Size } setSize={ setSize } sku={ SKU } />
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
        <SelectQuantity availableQty={ availableQty } setQuantity={ setQuantity }/>
      </CartWrapper>
    )
  }
  return (
    <CartWrapper>
      <SelectSize size={ Size } setSize={ setSize } sku={ SKU } />
      <SelectQuantity availableQty={ availableQty } setQuantity={ setQuantity }/>
      <AddCartButton onClick= {handleChange}>Add To Cart</AddCartButton>
    </CartWrapper>
  )
};
