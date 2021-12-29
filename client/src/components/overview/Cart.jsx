import React from 'react';

import { CartWrapper } from '../../../dist/overviewStyling.js';

export const Cart = (props) => {
  return (
    <CartWrapper>
      <div className="selectSize">
      </div>
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
