import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
position: absolute;
border-style: solid;
width: 35%;
left: 50%;
top: 10%;
height: 7.5%;
width: 47.5%;
`;

export const Review = (props) => {
  return (
    <Wrapper>
      <div className="Review"> Review Placeholder</div>
    </Wrapper>
  )
}