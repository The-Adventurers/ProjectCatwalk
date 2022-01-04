import React, { useState, useEffect } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import { MainContainer, RelatedProducts, CarouselContainer, Carousel, InnerCarousel, Arrow, NoArrow } from '../../../dist/RelatedProductStyles';

const RelatedProductList = ({productId, currentProduct, setProductId, relatedProducts, setRelatedProducts}) => {
  let [showModal, setShowModal] = useState(false);
  let [comparisonProduct, setComparisonProduct] = useState({});
  let [allCards, setAllCards] = useState([]);
  let [index, setIndex] = useState(0);

  const setModal = (e, product) => {
    e.stopPropagation();
    if (!showModal) {
      setComparisonProduct(product);
    }
    setShowModal(!showModal);
  }

  const removeDuplicates = () => {
    let noDuplicates = {};
    let cards = [];
    for (let i = 0; i < relatedProducts.length; i++) {
      if ((noDuplicates[relatedProducts[i].id] === undefined)) {
        noDuplicates[relatedProducts[i].id] = relatedProducts[i].name;
        cards.push(<RelatedProductCard product={relatedProducts[i]} key={relatedProducts[i].id} setProductId={setProductId} setModal={setModal}/>);
      }
    }
    setAllCards(cards);
  }

  useEffect(() => {
    removeDuplicates();
  }, [relatedProducts])

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= allCards.length - 4) {
      newIndex = allCards.length - 4;
    }
    setIndex(newIndex);
  }

  return (
    <div>
      <RelatedProducts>RELATED PRODUCTS
        <CarouselContainer>
          {index === 0 ? <NoArrow/> : <Arrow src='https://img.icons8.com/ios/344/circled-left-2.png'
          onClick={() => { updateIndex(index - 1); }}/>}
          <Carousel>
            <InnerCarousel style={{ transform: `translateX(-${index * 25}%)` }}>
              {allCards}
            </InnerCarousel>
          </Carousel>
          {index >= allCards.length - 4 ? <NoArrow/> : <Arrow src='https://img.icons8.com/ios/344/circled-right-2.png' onClick={() => { updateIndex(index + 1); }}/>}
        </CarouselContainer>
      </RelatedProducts>
      <ComparisonModal currentProduct={currentProduct} comparisonProduct={comparisonProduct} showModal={showModal} setModal={setModal}/>
    </div>
  );
}

export default RelatedProductList;