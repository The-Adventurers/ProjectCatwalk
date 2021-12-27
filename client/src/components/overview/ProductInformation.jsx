import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: absolute;
  border-style: solid;
  width: 35%;
  left: 50%;
  top: 20%;
  height: 15%;
  width: 47.5%;
`;

/* price needs to change based on selected style,
if product is on sale, price should be red
and original price should be strucktrhough*/

export const ProductInformation = (props) => {
  return (
    <Wrapper>
      <div className="OverviewCategory">Category</div>
      <div className="OverviewTitle">Product Title</div>
      <div className="OverviewPrice">Price</div>
    </Wrapper>
  )
};
