import React, { useState, useEffect } from 'react';
import RelatedProductList from './relatedProducts/RelatedProductList.jsx';
import OutfitList from './relatedProducts/OutfitList.jsx';
import QAsection from './QA/QAsection.jsx';
import { OverviewApp } from './overview/OverviewApp.jsx';
<<<<<<< HEAD
import RnR_App from './R&R/RnRApp.jsx';
=======
import { getProducts, getStyles, getRelated } from '../shared/api';
>>>>>>> 810a8ff0e38c064f640c3e3b7c703f69811ca17a


const App = function () {
  let [productId, setProductId] = useState(63616);
  let [currentProduct, setCurrentProduct] = useState({});
  let [styles, setStyles] = useState([]);
  let [relatedProducts, setRelatedProducts] = useState([]);
  let [currentOutfit, setCurrentOutfit] = useState({});
  let [yourOutfit, setYourOutfit] = useState([]);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  const getAllData = () => {
    let getData = [getProducts({product_id: productId}), getStyles({product_id: productId }), getRelated({product_id: productId})];
    Promise.all(getData)
      .then((results) => {
        setCurrentProduct(results[0].data);
        setRelatedProducts(results[2].data.slice(1));
        setCurrentOutfit(results[2].data[0])
        setStyles(results[1].data.results);
        setIsLoading(false);
      })
      .catch(err => { setError(err); })
  }

  useEffect(() => {
    getAllData();
  }, [productId])

  if (error) {
    return (
      <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png.webp"/>
    );
  }

  if (isLoading) {
    return <img src='https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'/>;
  }

  return (
    <div>
      <div>
        <OverviewApp product_id={ productId } currentProduct = { currentProduct } styles={ styles } setStyles={ setStyles }/>
      </div>
      <div>
        <RelatedProductList productId={productId} currentProduct={currentProduct} setProductId={setProductId} relatedProducts={relatedProducts} setRelatedProducts={setRelatedProducts}/>
      </div>
      <div>
        <OutfitList productId={productId} currentProduct={currentProduct} currentOutfit={currentOutfit} yourOutfit={yourOutfit} setYourOutfit={setYourOutfit}/>
      </div>
      {/* <div className="QA-section" style={{marginTop: '85vh'}}>
        <QAsection product_id={productId} />
      </div> */}
    </div>
  )
}


export default App;
