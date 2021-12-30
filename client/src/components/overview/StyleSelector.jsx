import React from 'react';

import { SelectStyleWrapper, StyleButton } from '../../../dist/overviewStyling.js';

export const StyleSelector = (props) => {

  return (
    <SelectStyleWrapper>
      <div>Select Style / Color</div>
      <div>{props.styles.map((style) => {
        return (
          <button key={style.style_id} onClick={()=> {
            props.selectStyle(style);
            props.setZoom(false);
          }}>
            <img src={style.photos[0].thumbnail_url}/>
            {style.name}
          </button>
        )
      })}
      </div>
    </SelectStyleWrapper>
  )
}