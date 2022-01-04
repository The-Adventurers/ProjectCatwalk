import React, { useState, useEffect } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import { MainContainer, RelatedProducts, CarouselContainer, Carousel, Arrow } from '../../../dist/RelatedProductStyles';

const RelatedProductList = ({productId, currentProduct, setProductId, relatedProducts, setRelatedProducts}) => {
  let [showModal, setShowModal] = useState(false);
  let [comparisonProduct, setComparisonProduct] = useState({});
  let [shownCards, setShownCards] = useState([]);
  let index = 0;

  const setModal = (e, product) => {
    e.stopPropagation();
    if (!showModal) {
      setComparisonProduct(product);
    }
    setShowModal(!showModal);
  }

  const generateCards = (products) => {
    let noDuplicates = {};
    let cards = [];
    for (let i = 0; i < products.length; i++) {
      if ((noDuplicates[products[i].id] === undefined) && (index < 4)) {
        noDuplicates[products[i].id] = products[i].name;
        cards.push(<RelatedProductCard product={products[i]} key={products[i].id} setProductId={setProductId} setModal={setModal}/>);
        index++;
      }
    }
    setShownCards(cards);
  }

  useEffect(() => {
    generateCards(relatedProducts);
  }, [])

  return (
    <div>
      <RelatedProducts>RELATED PRODUCTS
        <CarouselContainer>
          {index<4 ? null : <Arrow src='https://img.icons8.com/ios/344/circled-left-2.png'/>}
          <Carousel>
            {shownCards}
          </Carousel>
          {index<=4 ? <Arrow src='https://img.icons8.com/ios/344/circled-right-2.png'/> : null}
        </CarouselContainer>
      </RelatedProducts>
      <ComparisonModal currentProduct={currentProduct} comparisonProduct={comparisonProduct} showModal={showModal} setModal={setModal}/>
    </div>
  );
}

export default RelatedProductList;