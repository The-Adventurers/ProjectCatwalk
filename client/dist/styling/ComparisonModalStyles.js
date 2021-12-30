import styled from 'styled-components';

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
`;

export const Header = styled.div`
  padding-left: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: lighter;
  font-size: 12px;
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