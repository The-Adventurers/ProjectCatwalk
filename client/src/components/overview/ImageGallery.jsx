import React from 'react';
import { getProducts } from '../../shared/api.js';

export const ImageGallery = (props) => {
  getProducts({ product_id: 63613 })
    .then((results) => {
      console.log(results.data)
    })
    .catch((error) => {
      console.log(error);
    })
  return (
    <div className="OverviewGallery">ImageGallery PlaceHolder</div>
  )
}