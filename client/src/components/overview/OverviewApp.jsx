import React from 'react';
import { ProductInformation } from './ProductInformation.jsx';
import { ImageGallery } from './ImageGallery.jsx';

export const OverviewApp = (props) => {
  return (
    <div className="Overview">
      <ImageGallery />
      <ProductInformation />
    </div>
  )
};
