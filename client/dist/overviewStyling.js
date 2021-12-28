import styled from 'styled-components';

export const Overview = styled.section`
position: absolute;
width: 90%;
height: 80%;
left: 5%;
top: 10%;
`;

export const ProductInfoWrapper = styled.section`
border-style: solid;
overflow: auto;
  font-family: Futura;
  position: absolute;
  width: 35%;
  left: 50%;
  top: 20%;
  height: 30%;
  width: 47.5%;
`;

export const Category = styled.section`
  font-size: 20px;
  font-weight: 200;
  color: #4d4d4d;
`;

export const Title = styled.section`
  font-size: 25px;
  font-weight: bold;
  margin-top: 2px;
  margin-bottom: 10px;
`;

export const Description = styled.section`
  padding-left: 5px;
`;

export const Price = styled.section`
  display: inline-block;
  padding-left: 5px;
  padding-top: 20px;
  font-size: 15px;
`;

export const SalesPrice = styled.section`
  display: inline-block;
  padding-left: 5px;
  padding-top: 20px;
  font-size: 15px;
  color: red;
`;

export const OldPrice = styled.section`
  display: inline-block;
  font-size: 15px;
  text-decoration: line-through;
`;

export const SelectStyleWrapper = styled.section`
border-style: solid;
position: absolute;
padding-left: 5px;
font-family: helvetica;
font-weight: bold;
font-size 1em;
width: 35%;
left: 50%;
top: 52.5%;
height: 20%;
width: 47%;
`;

export const StyleButton = styled.button`
&:hover {
  background: black;
  border: 2px solid black;
}
display: inline-block;
background: grey;
color: white;
font-size: 1em;
margin: 1%;
padding: 1% 2%;
border: 2px solid grey;
border-radius: 3px;
`;

export const GalleryWrapper = styled.section`
border-style: solid;
position: absolute;
left: 2.5%;
top: 10%;
height: 85%;
width: 45%;
`;