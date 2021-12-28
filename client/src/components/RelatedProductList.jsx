import React, { useState, useEffect } from 'react';
import { getRelated, getRelatedInfo } from '../shared/api.js';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedProductList = () => {
  // get product ID from URL (URl encoding/decoding) in App.jsx - using hard-coded ID for now
  let productId = 63609;

  // related products array
  let [relatedProducts, setRelatedProducts] = useState([]);

  // get related products array and set to state
  useEffect(() => {
    getRelated({product_id: productId})
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
    }, [])

  return (
    <div>RELATED PRODUCTS
      {relatedProducts.map((product) => (
        <RelatedProductCard product={product} key={product.name}/>
      ))}
    </div>
  );
}

export default RelatedProductList;