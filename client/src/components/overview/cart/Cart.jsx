import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
position: absolute;
border-style: solid;
width: 35%;
left: 50%;
top: 55%;
height: 20%;
width: 47.5%;
`;

export const Cart = (props) => {
  return (
    <Wrapper>
      <div className="selectSize">
         <button className="sizeButton">Select Size</button>
        <div className="sizeContent">
          <a href="sizeOne">Style 1</a>
        </div>
      </div>
    </Wrapper>
  )
}