import React, { useState, useEffect } from 'react';
import { starConverter } from './helpers.js';
import { ProductCard, Container, Image, Icon, Category, Name, Price, SalePrice, RegPrice, Rating } from '../../../dist/RelatedProductStyles';

const OutfitListCard = ({ product, yourOutfits, setYourOutfits }) => {
  let price, image;
  if (product.salePrice) {
    price = <><RegPrice>{'$' + Math.round(product.defaultPrice)}</RegPrice><SalePrice>{'$' + Math.round(product.salePrice)}</SalePrice></>
  } else {
    price = <Price>{'$' + Math.round(product.defaultPrice)}</Price>
  }

  if (product.thumbnailUrl) {
    image = <Image src={product.thumbnailUrl} alt="Thumbnail current product image"/>
  } else {
    image = <Image src='https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1' alt="Thumbnail current product image"/>
  }

  const removeOutfit = () => {
    let newOutfit = [...yourOutfits]
    for (let i = 0; i < yourOutfits.length; i++) {
      if (yourOutfits[i].id === product.id) {
        newOutfit.splice(i, 1)
        localStorage.setItem('outfits', `${JSON.stringify(newOutfit)}`);
        setYourOutfits(newOutfit);
      }
    }
  }

  return (
    <ProductCard>
      <Container>
        {image}
        <Icon
          src='https://cdn-icons-png.flaticon.com/512/992/992660.png'
          aria-label='Remove current product from your outfit list'
          alt=''
          onClick={removeOutfit}
        />
      </Container>
      <Category>{product.category.toUpperCase()}</Category>
      <Name>{product.name}</Name>
      {price}
      <Rating>{starConverter(product.rating)}</Rating>
    </ProductCard>
  );
}

export default OutfitListCard;