import styled from 'styled-components';

// RELATED PRODUCTS LIST //
export const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  left: 2%;
  top: 80%;
`;

export const RelatedProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 20px;
  font-family: Helvetica, Sans-Serif;
  margin-top: 50px;
  font-weight: 500;
  font-size: 20px;
  overflow: auto;
`;

export const CarouselContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Carousel = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
`;

export const ProductCard = styled.div`
  text-align: left;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
`;

export const Category = styled.div`
  font-weight: lighter;
  font-size: 12px;
  padding: 2px 10px;
  letter-spacing: 0.5px;
  margin-top: 5px;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  padding: 2px 10px;
  letter-spacing: 0.5px;
`;

export const Price = styled.div`
  font-weight: lighter;
  font-size: 14px;
  padding: 2px 10px;
  margin-bottom: 5px;
`;

export const SalePrice = styled.div`
  font-weight: lighter;
  font-size: 14px;
  padding: 2px 10px;
  display: inline-block;
  padding-left: 5px;
  font-size: 15px;
  color: red;
`;

export const RegPrice = styled.div`
  font-weight: lighter;
  font-size: 14px;
  padding: 2px 10px;
  display: inline-block;
  font-size: 15px;
  text-decoration: line-through;
`;

export const Container = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 260px;
  height: 260px;
  transition: transform 0.5s, filter 0.5s ease-in-out;
  transform-origin: center center;
  border-radius: 10px 10px 0 0;
  &:hover {
    transform: scale(1.05);
    opacity: 0.6;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  z-index: 2;
  top: 10px;
  right: 10px;
  position: absolute;
`;

export const Rating = styled.div`
  font-weight: lighter;
  font-size: 12px;
  padding: 2px 10px;
  margin-bottom: 5px;
`;

export const Arrow = styled.img`
  width: 50px;
  height: 50px;
  &:hover {
    opacity: 0.6;
  }
`;
// RELATED PRODUCTS LIST //


// YOUR OUTFIT LIST //
export const AddCard = styled.div`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
`

export const Add = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.5px;
  color: #333;
`

export const AddIcon = styled.img`
  width: 260px;
  height: 260px;
  transition: transform 0.5s, filter 0.5s ease-in-out;
  transform-origin: center center;
  border-radius: 10px 10px 0 0;
  &:hover {
    opacity: 0.6;
  }
`;
// YOUR OUTFIT LIST //

// COMPARISON MODAL //
export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 2%;
  bottom: 15%;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 270px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  font-family: Helvetica, Sans-Serif;
  position: relative;
`;

export const Header = styled.div`
  padding-left: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: lighter;
  font-size: 13px;
  letter-spacing: 0.5px;
`;

export const Products = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  color: #222;
`;

export const Features = styled.div`
  display: block;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Feature = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 5px;
  color: #333;
  font-size: 14px;
  font-weight: lighter;
  letter-spacing: 0.5px;
`;

export const CheckMark = styled.img`
  width: 25px;
  height: 25px;
`;

export const ModalIcon = styled.img`
  width: 20px;
  height: 20px;
  z-index: 20;
  top: 12px;
  right: 20px;
  position: absolute;
`;
// COMPARISON MODAL //