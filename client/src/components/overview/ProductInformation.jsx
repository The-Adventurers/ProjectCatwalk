import React, { useState, useEffect } from 'react';

import { ProductInfoWrapper, Title, Category, Price, SalesPrice, OldPrice, Description } from '../../../dist/overviewStyling.js';

export const ProductInformation = (props) => {
  if (props.style.sale_price !== null) {
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
        <Price>
          <div className="OverviewPrice">Price $<OldPrice>{props.style.original_price}</OldPrice></div>
        </Price>
        <SalesPrice>
          <div className="OverviewPrice">${props.style.sale_price}</div>
        </SalesPrice>
      </ProductInfoWrapper>
    )
  } else {
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
        <Price>
          <div className="OverviewPrice">Price ${props.style.original_price}</div>
        </Price>
      </ProductInfoWrapper>
    )
  }
};
