import React, { useState, useEffect } from 'react';

import { getStyles, getProducts } from '../../shared/api.js';
import { Overview } from '../../../dist/overviewStyling.js';
import { ProductInformation } from './ProductInformation.jsx';
import { ImageGallery } from './ImageGallery.jsx';
import { StyleSelector } from './StyleSelector.jsx';
import { Cart } from './Cart.jsx';

export const OverviewApp = (props) => {
  const [Styles, setStyles] = useState([]);
  const [Style, setStyle] = useState({
    photos: [{
      url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg',
      thumbnail_url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'
    }]
  });
  const [ImageIndex, setImageIndex] = useState(0);
  const [Zoom, setZoom] = useState(false);
  const [Error, setError] = useState(null);

  useEffect(() => {
    getStyles({product_id: props.product_id })
      .then((res) => {
        setStyles(res.data.results);
        setStyle(res.data.results[0])
      })
      .catch((error) => {
        setError(error);
      });
  }, [props.product_id]);

  const LimitImageArray = Style.photos.slice(0, 10);
  const currentImage = LimitImageArray[ImageIndex].url || 'https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1'
  if (Error) {
    return (
      <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png.webp"/>
    )
  }
  return (
    <Overview>
    <div className="Overview">
      <img src="https://img.icons8.com/ios/344/circled-left-2.png" className={ImageIndex === 0 ? "hiddenArrow" : "leftArrowGallery"} onClick={() => {
        setImageIndex(ImageIndex-1);
      }}/>
      <img src="https://img.icons8.com/ios/344/circled-right-2.png" className={ImageIndex === LimitImageArray.length - 1 ? "hiddenArrow" : "rightArrowGallery"} onClick={() => {
        setImageIndex(ImageIndex+1);
      }}/>
      <ImageGallery style={ Style } currentImage={ currentImage } limitImageArray={ LimitImageArray } setImageIndex={ setImageIndex } zoom={ Zoom } setZoom={ setZoom }/>
      <ProductInformation product={ props.currentProduct } style={ Style }/>
      <StyleSelector styles={ Styles } selectStyle={ setStyle } setZoom={ setZoom }/>
      <Cart style={ Style }/>
    </div>
    </Overview>
  )
};
