import React, { useState, useEffect } from 'react';

import { getStyles, getProducts } from '../../shared/api.js';
import { Overview } from '../../../dist/overviewStyling.js';
import { ProductInformation } from './ProductInformation.jsx';
import { ImageGallery } from './ImageGallery.jsx';
import { StyleSelector } from './StyleSelector.jsx';
import { Cart } from './Cart.jsx';

export const OverviewApp = (props) => {

  const [allStyles, setAllStyles] = useState([]);
  const [singleStyle, setSingleStyle] = useState({
    photos: [{
      url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg',
      thumbnail_url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'
    }]
  });
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    getStyles({product_id: props.product_id })
      .then((res) => {
        setAllStyles(res.data.results);
        setSingleStyle(res.data.results[0]);
      })
      .catch((error) => {
        props.setError(error);
      });
  }, [props.product_id]);

  const LimitImageArray = singleStyle.photos.slice(0, 10);
  let currentImage = 'https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1';

  if (LimitImageArray[imageIndex]) {
    currentImage = LimitImageArray[imageIndex].url
  } else {
    currentImage = LimitImageArray[0].url
  }

  return (
    <Overview>
      <div className="Overview">
        <img src="https://img.icons8.com/ios/344/circled-left-2.png" className={imageIndex === 0 ? "hiddenArrow" : "leftArrowGallery"} onClick={() => {
          setImageIndex(imageIndex-1);
        }}/>
        <img src="https://img.icons8.com/ios/344/circled-right-2.png" className={imageIndex === LimitImageArray.length - 1 ? "hiddenArrow" : "rightArrowGallery"} onClick={() => {
          setImageIndex(imageIndex+1);
        }}/>
        <ImageGallery style={ singleStyle } currentImage={ currentImage } limitImageArray={ LimitImageArray } setImageIndex={ setImageIndex }/>
        <ProductInformation product={ props.currentProduct } style={ singleStyle }/>
        <StyleSelector styles={ allStyles } selectStyle={ setSingleStyle }/>
        <Cart style={ singleStyle }/>
      </div>
    </Overview>
  )
};
