import React from 'react';

const RelatedProductCard = ({product}) => {
  let price;
  if (product.salePrice) {
    price = <div>Reg Price: {'$' + Math.round(product.defaultPrice)}, Sale Price: {'$' + Math.round(product.salePrice)}</div>
  } else {
    price = <div>{'$' + Math.round(product.defaultPrice)}</div>
  }
  return (
    <div>
      <img src={product.thumbnailUrl /* need default image for products without images */}></img>
      <div>{product.category}</div>
      <div>{product.name}</div>
      {price}
      <div>{product.rating /* import star component for rating */}</div>
    </div>
  );
}

export default RelatedProductCard;