import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: absolute;
  border-style: solid;
  width: 35%;
  left: 52.5%;
  top: 20%;
  height: 15%;
  width: 40%;
`;

export const ProductInformation = (props) => {
  return (
    <Wrapper>
      <div className="OverviewCategory">Category</div>
      <div className="OverviewTitle">Product Title</div>
      <div className="OverviewPrice">Price</div>
    </Wrapper>
  )
};
