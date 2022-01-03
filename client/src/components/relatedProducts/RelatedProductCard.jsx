import React from 'react';
import { ProductCard, Container, Image, Icon, Category, Name, Price, SalePrice, RegPrice, Rating } from '../../../dist/RelatedProductStyles';

const RelatedProductCard = ({ product, setProductId, setModal }) => {
  let price, image;
  if (product.salePrice) {
    price = <><RegPrice>{'$' + Math.round(product.defaultPrice)}</RegPrice><SalePrice>{'$' + Math.round(product.salePrice)}</SalePrice></>
  } else {
    price = <Price>{'$' + Math.round(product.defaultPrice)}</Price>
  }

  if (product.thumbnailUrl) {
    image = <Image src={product.thumbnailUrl} alt="Thumbnail related product image"/>
  } else {
    image = <Image src='https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1' alt="Thumbnail related product image"/>
  }

  return (
    <ProductCard
      aria-label='Go to related product page'
      onClick={() => { setProductId(product.id); }}
    >
      <Container>
        {image}
        <Icon
          src='https://cdn-icons-png.flaticon.com/512/157/157933.png'
          aria-label='Open product comparison modal'
          alt=''
          onClick={(e) => {setModal(e, product)}}
        />
      </Container>
      <Category>{product.category.toUpperCase()}</Category>
      <Name>{product.name}</Name>
      {price}
      {/* <Rating>{product.rating}</Rating> */}
    </ProductCard>
  );
}

export default RelatedProductCard;