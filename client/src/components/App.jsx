import React, { useState, useEffect} from 'react';
import RelatedProductList from './relatedProducts/RelatedProductList.jsx';
import OutfitList from './relatedProducts/OutfitList.jsx';
import QAsection from './QA/QAsection.jsx';
import { OverviewApp } from './overview/OverviewApp.jsx';
import { getProducts, getStyles, getRelated } from '../shared/api';
import { MainContainer } from '../../dist/RelatedProductStyles';
import RnRApp from './R&R/RnRApp.jsx';

const App = function () {

  let [productId, setProductId] = useState(63616);
  let [currentProduct, setCurrentProduct] = useState({});
  let [styles, setStyles] = useState([]);
  let [relatedProducts, setRelatedProducts] = useState([]);
  let [currentOutfit, setCurrentOutfit] = useState({});
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
      <MainContainer>
        <RelatedProductList productId={productId} currentProduct={currentProduct} setProductId={setProductId} relatedProducts={relatedProducts} setRelatedProducts={setRelatedProducts}/>
        <OutfitList productId={productId} currentProduct={currentProduct} currentOutfit={currentOutfit}/>
        <QAsection product_id={currentProduct.id} product_name={currentProduct.name} />
        <RnRApp productId = {productId} />
      </MainContainer>
    </div>
  )
}

export default App;
