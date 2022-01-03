import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../../shared/useWindowDimensions';
import { MainContainer2, RelatedProducts, Carousel, floatChild, floatChild2, floatContainer} from '../../../dist/RnRStyles';
import { getReviews } from '../../shared/api';
import RnRList from './RnRList.jsx';

//fetch all reviews

const RnRApp = function (props) {
  const [reviewList, reviewListUpdater] = useState([])
  const [productId, productIdUpdater] = useState(props.productId)
  
  useEffect(() => {
    productIdUpdater(props.productId)
    getReviews( {product_id : props.productId} )
    .then(
      res => {reviewListUpdater(res.data.results)})
  }, [props.productId])

  const { height, width } = useWindowDimensions();
  return (
    <MainContainer2>
        <div className = "leftSection">
            <p> There will be another component here. </p>
        </div>
        <div className = "rightSection">
            <RnRList reviewList = {reviewList}/>
            {/*console.log(reviewList)*/}
        </div>
    </MainContainer2>
  )
}



export default RnRApp;
