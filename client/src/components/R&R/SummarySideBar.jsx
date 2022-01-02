import React from 'react';
import useWindowDimensions from '../../shared/useWindowDimensions';

const RnRApp = function () {
  const { height, width } = useWindowDimensions();
  return (
    <div style = {{paddingLeft : width * 0.05}}>
      {/* */}
      <>
         <span> Just a plain old left box. </span> <span> Just a plain old right box. </span> 
        {/* <div style = {{"width" : width * 0.5}}>  </div> */} 
      </>
    </div>
  )
}


export default RnRApp;
