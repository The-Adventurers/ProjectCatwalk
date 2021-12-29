import React, { useState, useEffect } from 'react';
import { getRelated, getRelatedInfo, getProducts } from '../../shared/api';
import RelatedProductCard from './RelatedProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import { MainContainer, RelatedProducts, Carousel } from '../../../dist/styling/RelatedProductStyles';

const RelatedProductList = ({product_id}) => {
  // get product ID from URL (URl encoding/decoding) in App.jsx - using hard-coded ID for now
  let [currentProductId, setCurrentProductId] = useState(product_id);
  let [relatedProducts, setRelatedProducts] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [modalProduct, setModalProduct] = useState({});
  let [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    getRelated({product_id: currentProductId})
      .then((results) => {
        setRelatedProducts(results.data);
      })
      .catch(err => { console.error(err); })
    }, [currentProductId])

  const setModal = (e, product) => {
    e.stopPropagation();
    if (!showModal) {
      getProducts({product_id: currentProductId})
      .then((results) => {
        setCurrentProduct(results.data);
        setModalProduct(product);
        setShowModal(!showModal);
      })
      .catch(err => { console.log(error); })
    } else {
      setShowModal(!showModal);
    }
  }

  return (
    <MainContainer>
      <RelatedProducts>RELATED PRODUCTS
        <Carousel>
          {relatedProducts.map((product) => (
            <RelatedProductCard product={product} key={product.id} setCurrentProductId={setCurrentProductId} setModal={setModal}/>
          ))}
        </Carousel>
      </RelatedProducts>
      <ComparisonModal currentProduct={currentProduct} modalProduct={modalProduct} showModal={showModal} setModal={setModal}/>
    </MainContainer>
  );
}

export default RelatedProductList;