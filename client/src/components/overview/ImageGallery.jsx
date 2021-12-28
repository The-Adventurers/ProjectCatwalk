import React, { useState } from 'react';
import styled from 'styled-components';

import { GalleryWrapper, MiniGallery, MainImage } from '../../../dist/overviewStyling.js';

export const ImageGallery = (props) => {
  const images = props.style.photos || [];

  return (
    <GalleryWrapper>
      <MiniGallery>
        <div>
        {images.map((image, index) => {
          return <img src={image.thumbnail_url} alt="Product Thumbnail Image" key={index} className="MiniGalleryImage" onClick={() => {props.setCurrentImage(image.url)}}/>
        })}
        </div>
      </MiniGallery>
      <MainImage>
        <img src={props.currentImage} alt="Product Image" className="MainImage"/>
      </MainImage>
    </GalleryWrapper>
  )
}