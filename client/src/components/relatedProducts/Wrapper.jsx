import React, { useState, useEffect} from 'react';
import { getRelated } from '../../shared/api';
import RelatedProductList from './RelatedProductList.jsx';
import OutfitList from './OutfitList.jsx';

const RelatedProductsWrapper = ({ productId, setProductId, currentProduct, setError }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentOutfit, setCurrentOutfit] = useState({});

  const getRelatedData = () => {
    getRelated({product_id: productId})
      .then((results) => {
        setRelatedProducts(results.data.slice(1));
        setCurrentOutfit(results.data[0])
      })
      .catch(err => { setError(err); })
  }

  useEffect(() => {
    getRelatedData();
  }, [productId])

  return (
    <div>
      <RelatedProductList productId={productId} currentProduct={currentProduct} setProductId={setProductId} relatedProducts={relatedProducts} setRelatedProducts={setRelatedProducts} />
      <hr/>
      <OutfitList productId={productId} currentProduct={currentProduct} currentOutfit={currentOutfit} />
      <hr/>
    </div>
  );
}

export default RelatedProductsWrapper;