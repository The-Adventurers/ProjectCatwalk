import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: 1px;
`;

export const Header = styled.div`
  padding-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Products = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;