import React from 'react';

import { SelectStyleWrapper, Styles, ImageButton, StyleButton } from '../../../dist/overviewStyling.js';

export const StyleSelector = (props) => {

  return (
    <SelectStyleWrapper>
      <div>Select Style / Color</div>
      <Styles>{props.styles.map((style) => {
        return (
          <ImageButton key={style.style_id} onClick={()=> {
            props.selectStyle(style);
            props.setZoom(false);
          }} className="StyleButton">
            <img src={style.photos[0].thumbnail_url} className="StyleImage"/>
            {style.name}
          </ImageButton>
        )
      })}
      </Styles>
    </SelectStyleWrapper>
  )
}