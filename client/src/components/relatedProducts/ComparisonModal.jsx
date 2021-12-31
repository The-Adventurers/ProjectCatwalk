import React from 'react';
import { Background, ModalWrapper, Header, Products, Features, Feature, CheckMark, ModalIcon } from '../../../dist/RelatedProductStyles';

const ComparisonModal = ({ currentProduct , comparisonProduct, showModal, setModal }) => {
  let currentFeatures = {};
  let comparisonFeatures = {};
  let allFeatures = {};

  if (showModal) {
    currentProduct.features.forEach((ele) => {
      currentFeatures[ele.feature] = ele.value;
      allFeatures[ele.feature] = ele.value;
    });

    comparisonProduct.features.forEach((ele) => {
      comparisonFeatures[ele.feature] = ele.value;
      allFeatures[ele.feature] = ele.value;
    });

    let features = [];
    for (let key in allFeatures) {
      if(currentFeatures[key] && comparisonFeatures[key]) {
        features.push(
          <Feature key={key}>
            <CheckMark src='https://helpdeskgeek.com/wp-content/pictures/2021/06/checkmark.jpg'/>
            {allFeatures[key]} {key}
            <CheckMark src='https://helpdeskgeek.com/wp-content/pictures/2021/06/checkmark.jpg'/>
          </Feature>
        );
      } else if (currentFeatures[key]) {
        features.push(
          <Feature key={key}>
            <CheckMark src='https://helpdeskgeek.com/wp-content/pictures/2021/06/checkmark.jpg'/>
            {allFeatures[key]} {key}
            <div></div>
          </Feature>
        );
      } else {
        features.push(
          <Feature key={key}>
            <div></div>
            {allFeatures[key]} {key}
            <CheckMark src='https://helpdeskgeek.com/wp-content/pictures/2021/06/checkmark.jpg'/>
          </Feature>
        );
      }
    }

    return (
      <Background>
            <ModalIcon
                src='https://cdn-icons.flaticon.com/png/512/2734/premium/2734822.png?token=exp=1640915254~hmac=e17f64f7dddaad35c5f73a9a22441120'
                aria-label='Close Modal'
                alt=''
                onClick={setModal}
              />
            <ModalWrapper>
              <Header>COMPARING</Header>
              <Products>
                <div>{currentProduct.name}</div>
                <div>{comparisonProduct.name}</div>
              </Products>
              <Features>
                {features}
              </Features>
            </ModalWrapper>
        </Background>
    );
  } else {
    return null;
  }
}

export default ComparisonModal;