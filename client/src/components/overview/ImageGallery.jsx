import React, { useState } from 'react';

import { GalleryWrapper, MiniGallery, MainImage, ImageLeft, ImageRight } from '../../../dist/overviewStyling.js';

export const ImageGallery = (props) => {
  const images = props.style.photos.slice(0, 10);

  return (
    <GalleryWrapper>
      <MiniGallery>
        <div>
        {images.map((image, index) => {
          if (image.url === null & image.thumbnail_url === null) {
            return <img src="https://st.depositphotos.com/3097111/4720/v/600/depositphotos_47208689-stock-illustration-picture-coming-soon-image-vector.jpg" alt="Thumbnail Image" key={image.url} className="MiniGalleryImage" onClick={() => {props.setImageIndex(index)}}/>
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