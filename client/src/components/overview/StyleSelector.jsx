import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
position: absolute;
padding-left: 5px;
font-family: helvetica;
font-weight: bold;
font-size 1em;
width: 35%;
left: 50%;
top: 37.5%;
height: 15%;
width: 47.5%;
`;
const Button = styled.button`
&:hover {
  background: black;
  border: 2px solid black;
}
display: inline-block;
background: grey;
color: white;
font-size: 1em;
margin: 1%;
padding: 1% 1%;
border: 2px solid grey;
border-radius: 3px;
`

export const StyleSelector = (props) => {

  return (
    <Wrapper>
      <div>Select Style / Color</div>
      <div>{props.styles.map((style) => {
        return (
          <Button key={style.style_id} onClick={()=> {props.selectStyle(style)}}>
            {style.name}
          </Button>
        )
      })}</div>
    </Wrapper>
  )
}