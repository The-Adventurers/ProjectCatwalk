import React, { useState, useEffect} from 'react';
import ProductContext from './ProductContext';
import NavBar from './NavBar.jsx';
import { OverviewApp } from './overview/OverviewApp.jsx';
import RelatedProductList from './relatedProducts/RelatedProductList.jsx';
import OutfitList from './relatedProducts/OutfitList.jsx';
import QAsection from './QA/QAsection.jsx';
import RnRApp from './R&R/RnRApp.jsx';
import { MainContainer } from '../../dist/RelatedProductStyles';
import { getProducts } from '../shared/api';

const App = function () {

  const [productId, setProductId] = useState(63616);
  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllData = () => {
    getProducts({product_id: productId})
      .then((results) => {
        setCurrentProduct(results.data);
        setIsLoading(false);
      })
      .catch(err => { setError(err); })
  };

  useEffect(() => {
    getAllData();
    return () => { document.documentElement.scrollTop = 0 };
  }, [productId])

  if (isLoading) {
    return <img src='https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'/>;
  }

  if (error) {
    return (
      <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png.webp"/>
    );
  }

  return (
    <div>
      <ProductContext.Provider value={{productId, setProductId, currentProduct}}>
        <NavBar/>
        <OverviewApp setError={setError}/>
        <MainContainer>
          <RelatedProductList/>
          <hr/>
          <OutfitList/>
          <hr/>
          <QAsection/>
          <hr/>
          <RnRApp/>
        </MainContainer>
      </ProductContext.Provider>
    </div>
  )
}

export default App;