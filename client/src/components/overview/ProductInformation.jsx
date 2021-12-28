import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  font-family: Futura;
  position: absolute;
  width: 35%;
  left: 50%;
  top: 20%;
  height: 15%;
  width: 47.5%;
`;

const Category = styled.section`
  font-size: 20px;
  font-weight: 200;
  color: #4d4d4d;
`

const Title = styled.section`
  font-size: 25px;
  font-weight: bold;
`
const Price = styled.section`
  display: inline-block;
  padding-left: 5px;
  padding-top: 20px;
  font-size: 15px;
`
const SalesPrice = styled.section`
  display: inline-block;
  padding-left: 5px;
  padding-top: 20px;
  font-size: 15px;
  color: red;
`
const OldPrice = styled.section`
  display: inline-block;
  font-size: 15px;
  text-decoration: line-through;
`

export const ProductInformation = (props) => {
  if (props.style.sale_price !== null) {
    return (
      <Wrapper>
      <Category><div className="OverviewCategory">{props.product.category}</div></Category>
      <Title><div className="OverviewTitle">{props.product.name}</div></Title>
      <Price><div className="OverviewPrice">Price $<OldPrice>{props.style.original_price}</OldPrice></div></Price>
      <SalesPrice><div className="OverviewPrice">${props.style.sale_price}</div></SalesPrice>
    </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Category><div className="OverviewCategory">{props.product.category}</div></Category>
        <Title><div className="OverviewTitle">{props.product.name}</div></Title>
        <Price><div className="OverviewPrice">Price ${props.style.original_price}</div></Price>
      </Wrapper>
    )
  }
};
