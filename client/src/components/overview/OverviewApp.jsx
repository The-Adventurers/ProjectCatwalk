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
  const [Style, setStyle] = useState({photos: [{url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'}]});
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
        setCurrentImage(res.data.results[0].photos[0].url)
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const currentImage = Style.photos[ImageIndex].url

  console.log(Styles)
  console.log('style', Style);
  return (
    <Overview>
    <div className="Overview">
      <img src="https://img.icons8.com/ios/344/circled-left-2.png" className="leftArrowGallery" onClick={() => {
        console.log('left');
      }}/>
      <img src="https://img.icons8.com/ios/344/circled-right-2.png" className="rightArrowGallery" onClick={() => {
        console.log('right');
      }}/>
      <ImageGallery style={ Style } currentImage={currentImage} setImageIndex={setImageIndex}/>
      <ProductInformation product={ Product } style={ Style }/>
      <StyleSelector product={ Product } styles={ Styles } selectStyle={setStyle} setImageIndex={setImageIndex}/>
      <Cart product={ Product }/>
    </div>
    </Overview>
  )
};
