import React from 'react';
import useWindowDimensions from '../../shared/useWindowDimensions';

const RnRApp = function () {
  const { height, width } = useWindowDimensions();
  return (
    <div style = {{paddingTop : height * 0.05}}>
      {/* */}
      <React.Fragment>
         <span> Just a plain old left box. </span> <span> Just a plain old right box. </span> 
        {/* <div style = {{"width" : width * 0.5}}>  </div> */} 
      </React.Fragment>
    </div>
  )
}


export default RnRApp;
