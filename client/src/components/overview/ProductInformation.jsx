import React, { useState, useEffect } from 'react';

import { ProductInfoWrapper, Title, Category, Price, SalesPrice, OldPrice, Description, PriceComponent } from '../../../dist/overviewStyling.js';

export const ProductInformation = (props) => {
    return (
      <div>
        <Category>
          <div className="OverviewCategory">{props.product.category}</div>
        </Category>
        <Title>
          <div className="OverviewTitle">{props.product.name}</div>
        </Title>
        <PriceComponent>
          {props.style.sale_price !== null ? ( <><OldPrice>{'$' + props.style.original_price}</OldPrice><SalesPrice>{'$' + props.style.sale_price}</SalesPrice></> ) : <Price>{'$' + props.style.original_price}</Price>}
        </PriceComponent>
        <Description>
          {props.product.description}
        </Description>
      </div>
    )
};
