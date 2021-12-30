import React, { useState } from 'react';

import { CartWrapper } from '../../../dist/overviewStyling.js';
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
      sku: k,
      size: props.style.skus[k].size,
      quantity: props.style.skus[k].quantity
    }
    if (Size === newObject.size) {
      availableQty = newObject.quantity;
      currentSKU = newObject.sku;
    }
    SKU.push(newObject)
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
        <SelectSize size={ Size } setSize={ setSize } sku={ SKU } />
        <SelectQuantity availableQty={ availableQty } setQuantity={ setQuantity }/>
      </CartWrapper>
    )
  }
  return (
    <CartWrapper>
      <SelectSize size={ Size } setSize={ setSize } sku={ SKU } />
      <SelectQuantity availableQty={ availableQty } setQuantity={ setQuantity }/>
      <button onClick= {
        () => {
          postCart({ sku_id: currentSKU, quantity: Quantity })
            .then((results) => {
              console.log('Cart Createed', results);
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }>Add To Cart</button>
    </CartWrapper>
  )
}

/* TODO
- Size Selector Form
    - should only show available sizes
    - no sizes available, form should be inactive and show 'OUT OF STOCK'
- Quantity Selector Form
    - default: '-' and no dropdown showing
    - should show minimum 1 to 15 or max available stock in that size
- Add to Cart button
    - will place size, quantity and style into the cart
    - if no size is selected it should urge user to select size with a "Please select size message"
    - same for qty
    - out of stock, this button should be hidden
*/
