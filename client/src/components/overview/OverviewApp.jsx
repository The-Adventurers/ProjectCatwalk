import React, { useState, useEffect, useContext } from 'react';
import ProductContext from '../ProductContext';
import { getStyles, getProducts } from '../../shared/api.js';
import { Overview, GalleryWrapper, MiniGallery, MainImage, ImageLeft, ImageRight,ProductInfoWrapper, Title, Category, Price, SalesPrice, OldPrice, Description, PriceComponent, SelectStyleWrapper, Styles, ImageButton, StyleButton } from '../../../dist/overviewStyling.js';
import { Cart } from './Cart.jsx';
import Modal from '../QA/Modal.jsx';

export const OverviewApp = (props) => {
  const { productId, currentProduct } = useContext(ProductContext);
  const [allStyles, setAllStyles] = useState([]);
  const [showModal, setShowModal] = useState([]);
  const [singleStyle, setSingleStyle] = useState({
    photos: [{
      url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg',
      thumbnail_url: 'https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'
    }]
  });
  const [imageIndex, setImageIndex] = useState(0);
  document.body.style.overflow =   showModal.length ? 'hidden' : 'auto';
  useEffect(() => {
    getStyles({product_id: productId })
      .then((res) => {
        setAllStyles(res.data.results);
        setSingleStyle(res.data.results[0]);
      })
      .catch((error) => {
        props.setError(error);
      });
  }, [productId]);

  const LimitImageArray = singleStyle.photos.slice(0, 10);
  let currentImage = 'https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1';

  if (LimitImageArray[imageIndex]) {
    currentImage = LimitImageArray[imageIndex].url
  } else {
    currentImage = LimitImageArray[0].url
  }

  return (
    <Overview>
      <div id='OverviewSection' className="Overview">
        <img
          src="https://img.icons8.com/ios/344/circled-left-2.png" className={imageIndex === 0 ? "hiddenArrow" : "leftArrowGallery"}
          onClick={() => {
            setImageIndex(imageIndex-1);
          }}
        />
        <img
          src="https://img.icons8.com/ios/344/circled-right-2.png" className={imageIndex === LimitImageArray.length - 1 ? "hiddenArrow" : "rightArrowGallery"}
          onClick={() => {
            setImageIndex(imageIndex+1);
          }}
        />
        <GalleryWrapper>
          <MiniGallery>
            {LimitImageArray.map((image, index) => {
              if (image.url === null & image.thumbnail_url === null) {
                return (
                  <img
                    src="https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1"
                    alt="Thumbnail Image" key={image.url} className="MiniGalleryImage" onClick={() => {setImageIndex(index)}}
                  />
                )
              }
              return (
                <img src={image.thumbnail_url} alt="Thumbnail" key={index} className="MiniGalleryImage" onClick={() => {setImageIndex(index)}}/>
              )
            })}
          </MiniGallery>
          <MainImage>
            <img src={currentImage} alt="Product Image" className="MainImage" onClick={()=>setShowModal([0])} />
            {showModal.length ? <Modal showPhoto={[0, [currentImage]]} setShowPhoto={setShowModal} /> : null }
          </MainImage>
        </GalleryWrapper>
        <ProductInfoWrapper>
          <Category>
            <div className="OverviewCategory">{currentProduct.category}</div>
          </Category>
          <Title>
           <div className="OverviewTitle">{currentProduct.name}</div>
          </Title>
          <PriceComponent>
            {singleStyle.sale_price !== null ? ( <><OldPrice>{'$' + singleStyle.original_price}</OldPrice><SalesPrice>{'$' + singleStyle.sale_price}</SalesPrice></> ) : <Price>{'$' + singleStyle.original_price}</Price>}
          </PriceComponent>
          <Description>
           {currentProduct.description}
          </Description>
          <hr className='hr'/>
        </ProductInfoWrapper>
        <SelectStyleWrapper>
          <div>Select Style / Color</div>
          <Styles>{allStyles.map((style) => {
            return (
              <ImageButton key={style.style_id} onClick={() => { setSingleStyle(style) }} className="StyleButton">
                <img src={style.photos[0].thumbnail_url} className="StyleImage"/>
                {style.name}
              </ImageButton>
            )
          })}
          </Styles>
        </SelectStyleWrapper>
        <Cart style={ singleStyle } />
      </div>
    </Overview>
  )
};
