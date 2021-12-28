import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  font-family: helvetica;
  font-size 15px;
  position: absolute;
  left: 2.5%;
  top: 80%;
  height: 15%;
  width: 95%;
`;

export const ProductDescription = (props) => {
  return (
    <Wrapper>
      <div>{props.product.description}</div>
    </Wrapper>
  )
}