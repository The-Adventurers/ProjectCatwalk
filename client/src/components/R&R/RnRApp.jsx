import React from 'react';
import useWindowDimensions from '../../shared/SharedHooks/useWindowDimensions';
import { MainContainer2, RelatedProducts, Carousel } from '../../../dist/RnRStyles';
import { getReviews } from '../../shared/api';

const RnRApp = function () {
  const { height, width } = useWindowDimensions();
  return (
    <MainContainer2>
    <div style = {{paddingTop : height * 0.05}}>
         {getReviews( {product_id : 63609} ).then(
           res => {console.log( res.data.results)})
      } <span> Just a plain old right box. </span> 
    </div>
    </MainContainer2>
  )
}


export default RnRApp;