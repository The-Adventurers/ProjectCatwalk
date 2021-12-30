import React, { useState, useEffect } from 'react';
import RelatedProductList from './relatedProducts/RelatedProductList.jsx';
import OutfitList from './relatedProducts/OutfitList.jsx';
import QAsection from './QA/QAsection.jsx';
import { OverviewApp } from './overview/OverviewApp.jsx';
import { getProducts } from '../shared/api';


const App = function () {
  let [productId, setProductId] = useState(63616);
  let [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    getProducts({product_id: productId})
      .then((results) => {
        setCurrentProduct(results.data);
      })
      .catch(err => { console.error(err); })
  }, [productId])

  return (
    <div>
      <div>
        <OverviewApp product_id={ productId }/>
      </div>
      <div>
        <RelatedProductList productId={productId} currentProduct={currentProduct} setProductId={setProductId}/>
      </div>
      <div>
        <OutfitList productId={productId} currentProduct={currentProduct}/>
      </div>
      <div className="QA-section" style={{marginTop: '85vh'}}>
        <QAsection product_id={productId} />
      </div>
    </div>
  )
}


export default App;
