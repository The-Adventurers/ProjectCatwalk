import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getStyles, getProducts } from '../../shared/api.js';

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
  width: 90%;
  height: 80%;
  left: 5%;
  top: 15%;
`;

export const OverviewApp = (props) => {
  const [Styles, setStyles] = useState([]);
  const [Product, setProduct] = useState({});
  const [Style, setStyle] = useState({});
  useEffect(() => {
    getProducts({ product_id: props.product_id })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error)
      });

    getStyles({product_id: props.product_id })
      .then((res) => {
        setStyles(res.data.results);
        setStyle(res.data.results[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  console.log(Styles)
  console.log('style', Style);
  return (
    <Overview>
    <div className="Overview">
      <ImageGallery product={ Product } />
      <Review />
      <ProductInformation product={ Product } style={ Style }/>
      <StyleSelector product={ Product } styles={ Styles } selectStyle={setStyle}/>
      <Cart product={ Product }/>
      <ProductDescription product={ Product }/>
    </div>
    </Overview>
  )
};
