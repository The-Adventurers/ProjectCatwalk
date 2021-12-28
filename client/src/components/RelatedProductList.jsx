import React, { useState, useEffect } from 'react';
import { getRelated, getRelatedInfo } from '../shared/api';
import RelatedProductCard from './RelatedProductCard.jsx';
import { RelatedProducts, Carousel } from '../../dist/RelatedProductStyles';

const RelatedProductList = () => {
  // get product ID from URL (URl encoding/decoding) in App.jsx - using hard-coded ID for now
  let [currentProduct, setCurrentProduct] = useState(63609);
  let [relatedProducts, setRelatedProducts] = useState([]);

  // get all related products information and set to state
  useEffect(() => {
    getRelated({product_id: currentProduct})
      .then((results) => {
        let relatedProductInfo = results.data.map((relatedId) => {
          return getRelatedInfo({product_id: relatedId});
        })
        return Promise.all(relatedProductInfo);
      })
      .then((results) => {
        let allRelatedInfo = [];
        for (let i = 0; i < results.length; i++) {
          allRelatedInfo.push(results[i].data);
        }
        console.log('Related Product Info: ', allRelatedInfo);
        setRelatedProducts(allRelatedInfo);
      })
      .catch(err => { console.error(err); })
    }, [currentProduct])

  const changeProduct = (id) => {
    setCurrentProduct(id);
  }

  return (
    <RelatedProducts>RELATED PRODUCTS
      <Carousel>
        {relatedProducts.map((product) => (
          <RelatedProductCard product={product} key={product.id} changeProduct={changeProduct}/>
        ))}
      </Carousel>
    </RelatedProducts>
  );
}

export default RelatedProductList;