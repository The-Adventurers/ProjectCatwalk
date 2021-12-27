import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border-style: solid;
  position: absolute;
  left: 10%;
  top: 10%;
  height: 65%;
  width: 40%;
`;

export const ImageGallery = (props) => {
  return (
    <Wrapper>
      <div className="OverviewGallery">ImageGallery PlaceHolder</div>
    </Wrapper>
  )
}