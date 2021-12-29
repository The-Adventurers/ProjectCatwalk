import React from 'react';
import { ProductCard, Container, Image, Icon, Category, Name, Price, Rating } from '../../dist/styling/RelatedProductStyles';

const RelatedProductCard = ({ product, setCurrentProductId, setModal }) => {
  let price, image;
  if (product.salePrice) {
    price = <Price>Reg Price: {'$' + Math.round(product.defaultPrice)}, Sale Price: {'$' + Math.round(product.salePrice)}</Price>
  } else {
    price = <Price>{'$' + Math.round(product.defaultPrice)}</Price>
  }

  if (product.thumbnailUrl) {
    image = <Image src={product.thumbnailUrl}/>
  } else {
    image = <Image src='https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1'/>
  }
  return (
    <ProductCard onClick={() => { setCurrentProductId(product.id); }}>
      <Container>
        {image}
        <Icon src='https://cdn-icons-png.flaticon.com/512/929/929566.png' onClick={(e) => {setModal(e, product)}}/>
      </Container>
      <Category>{product.category.toUpperCase()}</Category>
      <Name>{product.name}</Name>
      {price}
      <Rating>{product.rating /* import star component for rating */}</Rating>
    </ProductCard>
  );
}

export default RelatedProductCard;