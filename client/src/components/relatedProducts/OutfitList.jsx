import React, { useState, useEffect } from 'react';
import OutfitListCard from './OutfitListCard.jsx';
import { RelatedProducts, CarouselContainer, Carousel, InnerCarousel, Arrow, NoArrow, AddCard, Add, AddIcon, ProductCard, Container, Image, Icon, Category, Name, Price, Rating } from '../../../dist/RelatedProductStyles';

const OutfitList = ({ productId, currentProduct, currentOutfit }) => {
  let [yourOutfit, setYourOutfit] = useState([]);
  let [index, setIndex] = useState(0);
  let [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    if (localStorage.length) {
      let outfits = JSON.parse(localStorage.getItem('outfits'));
      setYourOutfit(outfits);
    }
  }, [])

  const addOutfit = () => {
    for (let item of yourOutfit) {
      if (item.id === currentOutfit.id) {
        return;
      }
    }
    let newOutfit = [...yourOutfit, currentOutfit];
    localStorage.setItem('outfits', `${JSON.stringify(newOutfit)}`);
    setYourOutfit(newOutfit);
  }

  const updateIndex = (newIndex) => {
    if (newIndex < 0 || yourOutfit.length < 4) {
      newIndex = 0;
    } else if (newIndex >= yourOutfit.length - 3) {
      newIndex = yourOutfit.length - 3;
    }
    setIndex(newIndex);
  }

  const scroll = () => {
    if (window.scrollY > scrollY) {
      updateIndex(index + 1);
    } else {
      updateIndex(index - 1);
    }
    setScrollY(window.scrollY);
  }

  return (
    <RelatedProducts>YOUR OUTFIT
      <CarouselContainer>
        {index === 0 ? <NoArrow/> :
        <Arrow
          src='https://img.icons8.com/ios/344/circled-left-2.png'
          aria-label='Scroll left in your outfit list'
          alt=''
          onClick={() => { updateIndex(index - 1); }}
        />}
        <Carousel onWheel={scroll}>
          <InnerCarousel style={{ transform: `translateX(-${index * 25}%)` }}>
            <AddCard>
              <AddIcon
                src='https://cdn.pixabay.com/photo/2018/11/13/21/44/instagram-3814061_1280.png'
                aria-label='Add current product to your outfit list'
                alt=''
                onClick={addOutfit}
              />
              <Add>Add to Outfit</Add>
            </AddCard>
            {yourOutfit.map((product) => (
              <OutfitListCard product={product} key={product.id} yourOutfit={yourOutfit} setYourOutfit={setYourOutfit}/>
            ))}
          </InnerCarousel>
        </Carousel>
        {index >= yourOutfit.length - 3 ? <NoArrow/> :
        <Arrow
          src='https://img.icons8.com/ios/344/circled-right-2.png'
          onClick={() => { updateIndex(index + 1); }}
          aria-label='Scroll right in your outfit list'
          alt=''
        />}
      </CarouselContainer>
    </RelatedProducts>
  );
}

export default OutfitList;