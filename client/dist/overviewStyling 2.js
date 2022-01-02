import styled from 'styled-components';

export const Overview = styled.section`
  position: absolute;
  width: 95%;
  height: 80%;
  left: 2%;
  top: 5%;
`;

export const ProductInfoWrapper = styled.section`
  overflow: auto;
  font-family: Futura;
  position: absolute;
  width: 35%;
  left: 62%;
  top: 8%;
  height: 40%;
  width: 37%;
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
  position: absolute;
  padding-left: 5px;
  font-family: helvetica;
  font-weight: bold;
  font-size 1em;
  left: 62%;
  top: 50.5%;
  height: 20%;
  width: 36.5%;
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
  position: absolute;
  padding-top: 0.4%;
  height: 85%;
  width: 62%;
  object-fit: contain;
`;

export const MiniGallery = styled.section`
  position: absolute;
  height: 87%;
  width: 15%;
  overflow: auto;
  border-radius: 10px;
`;

export const MainImage = styled.section`
  position: absolute;
  height: 87%;
  width: 83%;
  left: 16%;
  border-radius: 10px;
`;

export const CartWrapper = styled.section`
  border-style: solid;
  position: absolute;
  width: 35%;
  left: 62%;
  top: 73%;
  height: 20%;
  width: 37%;
`;