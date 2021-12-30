import React, { useState, useEffect } from 'react';

import { ProductInfoWrapper, Title, Category, Price, SalesPrice, OldPrice, Description } from '../../../dist/overviewStyling.js';

export const ProductInformation = (props) => {
    return (
      <ProductInfoWrapper>
        <Category>
          <div className="OverviewCategory">{props.product.category}</div>
        </Category>
        <Title>
          <div className="OverviewTitle">{props.product.name}</div>
        </Title>
        <Description>
          <div>{props.product.description}</div>
        </Description>
          <div className="OverviewPrice">
            Price ${
              props.style.sale_price !== null ? ( <><OldPrice>{props.style.original_price}</OldPrice><SalesPrice>${props.style.sale_price}</SalesPrice></> ) : <Price>{props.style.original_price}</Price>
            }
          </div>
      </ProductInfoWrapper>
    )
};
