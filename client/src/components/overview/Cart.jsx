import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
border-style: solid;
position: absolute;
width: 35%;
left: 50%;
top: 75%;
height: 20%;
width: 47.5%;
`;

export const Cart = (props) => {
  return (
    <Wrapper>
      <div className="selectSize">
      </div>
    </Wrapper>
  )
}