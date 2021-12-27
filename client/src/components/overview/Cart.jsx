import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
position: absolute;
border-style: solid;
width: 35%;
left: 52.5%;
top: 55%;
height: 20%;
width: 40%;
`;

export const Cart = (props) => {
  return (
    <Wrapper>
      <div className="Cart"> Cart Placeholder</div>
    </Wrapper>
  )
}