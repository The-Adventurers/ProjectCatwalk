import React, { useState, useEffect } from 'react';
import { MainContainer2, RelatedProducts, Carousel, AddCard, Add, AddIcon } from '../../../dist/styling/RelatedProductStyles';

const OutfitList = ({ productId, currentProduct }) => {
  return (
    <MainContainer2>
      <RelatedProducts>YOUR OUTFIT
        <Carousel>
          <AddCard>
            <AddIcon
              src='https://cdn.pixabay.com/photo/2018/11/13/21/44/instagram-3814061_1280.png'
              aria-label='Add current product to outfit'
              alt=''
            />
            <Add>Add to Outfit</Add>
          </AddCard>
        </Carousel>
      </RelatedProducts>
    </MainContainer2>
  );
}

export default OutfitList;