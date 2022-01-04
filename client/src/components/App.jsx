import React, { useState, useEffect} from 'react';
import RelatedProductList from './relatedProducts/RelatedProductList.jsx';
import OutfitList from './relatedProducts/OutfitList.jsx';
import QAsection from './QA/QAsection.jsx';
import { OverviewApp } from './overview/OverviewApp.jsx';
import { getProducts, getStyles, getRelated } from '../shared/api';
import RnRApp from './R&R/RnRApp.jsx';

/*  PLEASE READ* QAsection is currently getting product name by sending request to product route for Only component testing purpose, will remove both product_name requestion and generate random product_id when all components are connected - QAsection component takes in product_id and product_name as input params */


const App = function () {
  /** ------------------USE for generate randon product_id to test component ---------------*/
  // const [id, setID] = useState(63609);
  // const [name, setProductName] = useState('Camo Onesie')
  // const generateRandomProduct = () => {
  //   let RandomProduct_id = Math.floor(Math.random() * 6) + 63609;
  //   setID(RandomProduct_id);
  // }
  // useEffect(()=>{
  //   getProducts({product_id: id}).then(res=> setProductName(res.data.name));
  // },[id])
  /**------------------ end of component testing input param for QAsection ----------------**/
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

    <div id="main">
      <OverviewApp product_id={ productId } currentProduct = { currentProduct } styles={ styles } setStyles={ setStyles }/>
      <div>
        <RelatedProductList productId={productId} currentProduct={currentProduct} setProductId={setProductId} relatedProducts={relatedProducts} setRelatedProducts={setRelatedProducts}/>
      </div>
      <div>
        <OutfitList productId={productId} currentProduct={currentProduct} currentOutfit={currentOutfit} yourOutfit={yourOutfit} setYourOutfit={setYourOutfit}/>
      </div>
        <RnRApp productId = {productId} />
      <div className="QA-section">
        <QAsection product_id={currentProduct.id} product_name={currentProduct.name} />
      </div>
    </div>
  )
}

export default App;
