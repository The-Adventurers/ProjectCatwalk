import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border-style: solid;
  position: absolute;
  left: 2.5%;
  top: 10%;
  height: 65%;
  width: 45%;
`;

export const ImageGallery = (props) => {
  return (
    <Wrapper>
      <div className="OverviewGallery">ImageGallery PlaceHolder</div>
    </Wrapper>
  )
}