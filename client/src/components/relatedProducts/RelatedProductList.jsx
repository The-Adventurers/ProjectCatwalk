import React, { useState, useEffect } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import { MainContainer, RelatedProducts, Carousel } from '../../../dist/RelatedProductStyles';

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

  const removeDuplicates = (products) => {
    let noDuplicates = {};
    let newProducts = [...products];
    for (let i = 0; i < newProducts.length; i++) {
      if (noDuplicates[newProducts[i].id]) {
        newProducts.splice(i, 1);
      } else {
        noDuplicates[newProducts[i].id] = newProducts[i].name;
      }
    }
    return newProducts;
  }

  return (
    <div>
      <RelatedProducts>RELATED PRODUCTS
        <Carousel>
          {removeDuplicates(relatedProducts).map((product) => (
            <RelatedProductCard product={product} key={product.id} setProductId={setProductId} setModal={setModal}/>
          ))}
        </Carousel>
      </RelatedProducts>
      <ComparisonModal currentProduct={currentProduct} comparisonProduct={comparisonProduct} showModal={showModal} setModal={setModal}/>
    </div>
  );
}

export default RelatedProductList;