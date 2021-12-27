import React from 'react';
import styled from 'styled-components';

import { ProductInformation } from './ProductInformation.jsx';
import { ImageGallery } from './ImageGallery.jsx';
import { StyleSelector } from './StyleSelector.jsx';
import { Cart } from './cart/Cart.jsx';
import { ProductDescription } from './ProductDescription.jsx';
import { Review } from './Review.jsx';

const Overview = styled.section`
  border-style: solid;
  border-width: .5px;
  position: absolute;
  width: 75%;
  height: 80%;
  left: 12.5%;
`;

export const OverviewApp = (props) => {
  return (
    <Overview>
    <div className="Overview">
      <ImageGallery />
      <Review />
      <ProductInformation />
      <StyleSelector />
      <Cart />
      <ProductDescription />
    </div>
    </Overview>
  )
};
