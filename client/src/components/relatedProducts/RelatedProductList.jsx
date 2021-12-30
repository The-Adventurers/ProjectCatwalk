import React, { useState, useEffect } from 'react';
import { getRelated, getRelatedInfo, getProducts } from '../../shared/api';
import RelatedProductCard from './RelatedProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import { MainContainer, RelatedProducts, Carousel } from '../../../dist/styling/RelatedProductStyles';

const RelatedProductList = ({productId, currentProduct, setProductId}) => {
  let [relatedProducts, setRelatedProducts] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [comparisonProduct, setComparisonProduct] = useState({});

  useEffect(() => {
    getRelated({product_id: productId})
      .then((results) => {
        setRelatedProducts(results.data);
      })
      .catch(err => { console.error(err); })
    }, [productId])

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