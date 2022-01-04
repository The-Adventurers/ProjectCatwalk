import React, { useState } from 'react';

import { GalleryWrapper, MiniGallery, MainImage, ImageLeft, ImageRight, ZoomImage } from '../../../dist/overviewStyling.js';

export const ImageGallery = (props) => {
  const images = props.limitImageArray;

  return (
    <GalleryWrapper>
      <MiniGallery>
        <div>
        {images.map((image, index) => {
          if (image.url === null & image.thumbnail_url === null) {
            return <img src="https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1" alt="Thumbnail Image" key={image.url} className="MiniGalleryImage" onClick={() => {props.setImageIndex(index)}}/>
          }
          return <img src={image.thumbnail_url} alt="Thumbnail Image" key={index} className="MiniGalleryImage" onClick={() => {props.setImageIndex(index)}}/>
        })}
        </div>
      </MiniGallery>
      <MainImage>
        <img src={props.currentImage} alt="Product Image" className="MainImage"/>
      </MainImage>
    </GalleryWrapper>
  )
}