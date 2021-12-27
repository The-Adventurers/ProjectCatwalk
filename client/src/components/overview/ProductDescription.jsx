import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border-style: solid;
  position: absolute;
  left: 10%;
  top: 80%;
  height: 15%;
  width: 82.5%;
`;

export const ProductDescription = (props) => {
  return (
    <Wrapper>
      <div>ProductDescription Placeholder</div>
    </Wrapper>
  )
}