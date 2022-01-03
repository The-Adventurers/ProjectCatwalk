import React from 'react';
import useWindowDimensions from '../../shared/SharedHooks/useWindowDimensions';
import { MainContainer2, RelatedProducts, Carousel } from '../../../dist/RnRStyles';

const RnRApp = function () {
  const { height, width } = useWindowDimensions();
  return (
    <MainContainer2>
    <div style = {{paddingTop : height * 0.05}}>
         <span> Just a plain old box. </span> <span> Just a plain old right box. </span> 
    </div>
    </MainContainer2>
  )
}


export default RnRApp;
