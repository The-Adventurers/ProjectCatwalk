import React, { useState, useEffect } from 'react';
import OutfitListCard from './OutfitListCard.jsx';
import { RelatedProducts, Carousel, AddCard, Add, AddIcon, ProductCard, Container, Image, Icon, Category, Name, Price, Rating } from '../../../dist/RelatedProductStyles';

const OutfitList = ({ productId, currentProduct, currentOutfit, yourOutfit, setYourOutfit }) => {
  const addOutfit = () => {
    for (let item of yourOutfit) {
      if (item.id === currentOutfit.id) {
        return;
      }
    }
    let newOutfit = [...yourOutfit, currentOutfit];
    setYourOutfit(newOutfit);
  }

  return (
    <div>
      <RelatedProducts>YOUR OUTFIT
        <Carousel>
          {yourOutfit.map((product) => (
            <OutfitListCard product={product} key={product.id} yourOutfit={yourOutfit} setYourOutfit={setYourOutfit}/>
          ))}
          <AddCard>
            <AddIcon
              src='https://cdn.pixabay.com/photo/2018/11/13/21/44/instagram-3814061_1280.png'
              aria-label='Add current product to your outfit list'
              alt=''
              onClick={addOutfit}
            />
            <Add>Add to Outfit</Add>
          </AddCard>
        </Carousel>
      </RelatedProducts>
    </div>
  );
}

export default OutfitList;