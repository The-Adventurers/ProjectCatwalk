import React, { useState, useEffect } from 'react';
import { ProductCard, Container, Image, Icon, Category, Name, Price, Rating } from '../../../dist/styling/RelatedProductStyles';

const OutfitListCard = ({ product, yourOutfit, setYourOutfit }) => {
  let price, image;
  if (product.salePrice) {
    price = <Price>Reg Price: {'$' + Math.round(product.defaultPrice)}, Sale Price: {'$' + Math.round(product.salePrice)}</Price>
  } else {
    price = <Price>{'$' + Math.round(product.defaultPrice)}</Price>
  }

  if (product.thumbnailUrl) {
    image = <Image src={product.thumbnailUrl} alt="Thumbnail current product image"/>
  } else {
    image = <Image src='https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1' alt="Thumbnail current product image"/>
  }

  const removeOutfit = () => {
    let newOutfit = [...yourOutfit]
    for (let i = 0; i < yourOutfit.length; i++) {
      if (yourOutfit[i].id === product.id) {
        newOutfit.splice(i, 1)
        setYourOutfit(newOutfit);
      }
    }
  }

  return (
    <ProductCard>
      <Container>
        {image}
        <Icon
          src='https://cdn-icons.flaticon.com/png/512/2734/premium/2734822.png?token=exp=1640915254~hmac=e17f64f7dddaad35c5f73a9a22441120'
          aria-label='Remove current product from your outfit list'
          alt=''
          onClick={removeOutfit}
        />
      </Container>
      <Category>{product.category.toUpperCase()}</Category>
      <Name>{product.name}</Name>
      {price}
      <Rating>{product.rating /* import star component for rating */}</Rating>
    </ProductCard>
  );
}

export default OutfitListCard;