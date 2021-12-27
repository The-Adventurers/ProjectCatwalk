import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
position: absolute;
border-style: solid;
width: 35%;
left: 52.5%;
top: 37.5%;
height: 15%;
width: 40%;
`;

export const StyleSelector = (props) => {
  return (
    <Wrapper>
      <div>StyleSelector Placeholder</div>
    </Wrapper>
  )
}