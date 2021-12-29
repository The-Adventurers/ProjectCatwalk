import React, { useState, useEffect } from 'react';

import { getStyles, getProducts } from '../../shared/api.js';
import { Overview } from '../../../dist/overviewStyling.js';
import { ProductInformation } from './ProductInformation.jsx';
import { ImageGallery } from './ImageGallery.jsx';
import { StyleSelector } from './StyleSelector.jsx';
import { Cart } from './Cart.jsx';

export const OverviewApp = (props) => {
  const [Styles, setStyles] = useState([]);
  const [Product, setProduct] = useState({});
  const [Style, setStyle] = useState({
    photos: [{
      url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg',
      thumbnail_url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'
    }]
  });
  const [ImageIndex, setImageIndex] = useState(0);
  const [Error, setError] = useState(null);
  useEffect(() => {
    getProducts({ product_id: props.product_id })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        setError(error)
      });

    getStyles({product_id: props.product_id })
      .then((res) => {
        setStyles(res.data.results);
        setStyle(res.data.results[0])
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  const currentImage = Style.photos[ImageIndex].url || 'https://st.depositphotos.com/3097111/4720/v/600/depositphotos_47208689-stock-illustration-picture-coming-soon-image-vector.jpg'
  return (
    <Overview>
    <div className="Overview">
      <img src="https://img.icons8.com/ios/344/circled-left-2.png" className="leftArrowGallery" onClick={() => {
        if (ImageIndex !== 0) {
          setImageIndex(ImageIndex-1);
        }
      }}/>
      <img src="https://img.icons8.com/ios/344/circled-right-2.png" className="rightArrowGallery" onClick={() => {
        if (ImageIndex !== Style.photos.length - 1) {
          setImageIndex(ImageIndex+1);
        }
      }}/>
      <ImageGallery style={ Style } currentImage={currentImage} setImageIndex={setImageIndex}/>
      <ProductInformation product={ Product } style={ Style }/>
      <StyleSelector product={ Product } styles={ Styles } selectStyle={setStyle}/>
      <Cart product={ Product }/>
    </div>
    </Overview>
  )
};
