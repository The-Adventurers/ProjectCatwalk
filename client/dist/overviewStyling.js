import styled from 'styled-components';

export const Overview = styled.div`
  position: absolute;
  letter-spacing: 0.5px;
  width: 80%;
  height: 80%;
  top: 5%;
  margin-left: 1%;
`;

export const ProductInfoWrapper = styled.div`
  position: absolute;
  left: 62%;
  height: 30%;
  width: 37%;
`;

export const Category = styled.div`
  font-size: 20px;
  font-weight: 200;
  color: #4d4d4d;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 2px;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  position: relative;
  padding: 5px;
  height: 40%;
  overflow: auto;
`;
export const PriceComponent = styled.div`
  position: absolute;
  top: 100%;
`
export const Price = styled.div`
  display: inline-block;
  padding-left: 5px;
  font-size: 15px;
`;

export const SalesPrice = styled.div`
  display: inline-block;
  padding-left: 5px;
  font-size: 15px;
  color: red;
`;

export const OldPrice = styled.div`
  display: inline-block;
  font-size: 15px;
  text-decoration: line-through;
`;

export const SelectStyleWrapper = styled.div`
  position: absolute;
  padding-left: 5px;
  font-family: helvetica;
  font-weight: bold;
  font-size 1em;
  left: 62%;
  top: 48.5%;
  height: 35%;
  width: 36.5%;
`;

export const Styles = styled.div`
  width: 95%;
  height: 80%;
  overflow: auto;
`

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

export const ImageButton = styled.button`
  padding: '0rem', '0rem';
  background-color: transparent;
  border: 0;
  border-radius: '0rem';
  cursor: 'pointer';
  margin-bottom: '0rem';
  padding: 0px !important;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin: 5%;
  object-fit: cover;

`

export const AddCartButton = styled.button`
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

export const GalleryWrapper = styled.div`
  position: absolute;
  padding-top: 0.4%;
  height: 85%;
  width: 62%;
`;

export const MiniGallery = styled.div`
  position: absolute;
  height: 87%;
  width: 15%;
  overflow: auto;
  border-radius: 10px;
`;

export const MainImage = styled.div`
  position: relative;
  height: 87%;
  width: 83%;
  left: 16%;
  border-radius: 10px;
`;

export const CartWrapper = styled.div`
  position: absolute;
  width: 35%;
  left: 62%;
  top: 85%;
  height: 20%;
  width: 37%;
`;

export const ZoomImage = styled.div`
  position: relative;
  z-index: 100;
  display: block;
  margin: auto;
  object-fit: contain;
  left: 15%;
  height: 110%;
  width: auto;
`;