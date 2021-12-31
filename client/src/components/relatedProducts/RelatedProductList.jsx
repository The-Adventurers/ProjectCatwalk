import React, { useState, useEffect } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import { MainContainer, RelatedProducts, Carousel } from '../../../dist/styling/RelatedProductStyles';

const RelatedProductList = ({productId, currentProduct, setProductId, relatedProducts, setRelatedProducts}) => {
  let [showModal, setShowModal] = useState(false);
  let [comparisonProduct, setComparisonProduct] = useState({});

  const setModal = (e, product) => {
    e.stopPropagation();
    if (!showModal) {
      setComparisonProduct(product);
    }
    setShowModal(!showModal);
  }

  return (
    <MainContainer>
      <RelatedProducts>RELATED PRODUCTS
        <Carousel>
          {relatedProducts.map((product) => (
            <RelatedProductCard product={product} key={product.id} setProductId={setProductId} setModal={setModal}/>
          ))}
        </Carousel>
      </RelatedProducts>
      <ComparisonModal currentProduct={currentProduct} comparisonProduct={comparisonProduct} showModal={showModal} setModal={setModal}/>
    </MainContainer>
  );
}

export default RelatedProductList;