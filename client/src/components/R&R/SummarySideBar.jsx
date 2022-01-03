import React from 'react';
import useWindowDimensions from '../../shared/useWindowDimensions';

const RnRApp = function () {
  const { height, width } = useWindowDimensions();
  return (
    <div style = {{paddingLeft : width * 0.05}}>
      {/* */}
      <>
         <span> Coming soon! </span> 
        {/* <div style = {{"width" : width * 0.5}}>  </div> */} 
      </>
    </div>
  )
}


export default RnRApp;
