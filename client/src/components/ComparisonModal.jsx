import React from 'react';
import { Background, ModalWrapper, Header, Products } from '../../dist/styling/ComparisonModalStyles';

const ComparisonModal = ({ currentProductId, modalProduct, showModal, setModal }) => {
  if (showModal) {
    return (
      <Background onClick={setModal}>
            <ModalWrapper>
              <Header>COMPARING</Header>
              <Products>
                <div>Product 1</div>
                <div>Product 2</div>
              </Products>
            </ModalWrapper>
        </Background>
    );
  } else {
    return null;
  }
}

export default ComparisonModal;