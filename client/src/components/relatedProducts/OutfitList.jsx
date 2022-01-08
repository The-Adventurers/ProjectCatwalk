import React, { useState, useEffect } from 'react';
import { getStyles, getMeta } from '../../shared/api';
import OutfitListCard from './OutfitListCard.jsx';
import { getOutfitCard } from './helpers.js';
import { RelatedProducts, CarouselContainer, Carousel, InnerCarousel, Arrow, NoArrow, AddCard, Add, AddIcon, ProductCard, Container, Image, Icon, Category, Name, Price, Rating } from '../../../dist/RelatedProductStyles';

const OutfitList = ({ productId, currentProduct }) => {
  const [yourOutfits, setYourOutfits] = useState([]);
  const [currentOutfit, setCurrentOutfit] = useState({});
  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(window.scrollY);

  const addOutfit = () => {
    for (let item of yourOutfits) {
      if (item.id === currentProduct.id) {
        return;
      }
    }
    let outfitData = [getStyles({product_id: productId}), getMeta({product_id: productId})];
    Promise.all(outfitData)
      .then((results) => {
        let outfit = getOutfitCard(currentProduct, results);
        let newOutfit = [...yourOutfits, outfit];
        localStorage.setItem('outfits', `${JSON.stringify(newOutfit)}`);
        setYourOutfits(newOutfit);
        setCurrentOutfit(outfit);
      })
      .catch(err => { setError(err); })
  }

  useEffect(() => {
    if (localStorage.length) {
      let outfits = JSON.parse(localStorage.getItem('outfits'));
      setYourOutfits(outfits);
    }
  }, [])

  const updateIndex = (newIndex) => {
    if (newIndex < 0 || yourOutfits.length < 4) {
      newIndex = 0;
    } else if (newIndex >= yourOutfits.length - 3) {
      newIndex = yourOutfits.length - 3;
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
            {yourOutfits.map((product) => (
              <OutfitListCard product={product} yourOutfits={yourOutfits} setYourOutfits={setYourOutfits}/>
            ))}
          </InnerCarousel>
        </Carousel>
        {index >= yourOutfits.length - 3 ? <NoArrow/> :
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