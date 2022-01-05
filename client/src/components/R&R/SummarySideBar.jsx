import React from 'react';
import useWindowDimensions from '../../shared/useWindowDimensions';

const RnRApp = function () {
  const { height, width } = useWindowDimensions();
  return (
    <div style = {{paddingLeft : width * 0.05}}>
      <>
         <span> Coming soon. . . maybe </span> 
      </>
    </div>
  )
}


export default RnRApp;
