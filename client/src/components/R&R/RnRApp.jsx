import React, { useState, useEffect, useContext } from 'react';
import ProductContext from '../ProductContext';
import { ReviewListContainer, WriteReviewStyles} from '../../../dist/RnRStyles';
import { getReviews, getMeta } from '../../shared/api';
import RnRList from './RnRList.jsx';
import { AddReviewButton, MoreReviewButton} from './RnRButton.jsx';
import WriteReviewForm from './writeReviewForm.jsx';

const RnRApp = function () {
  const { productId } = useContext(ProductContext);
  const [reviewList, reviewListUpdater] = useState([])
  const [reviewMeta, reviewMetaUpdater] = useState([])
  const [reviewLength, reviewLengthUpdater] = useState(2)
  const [maxReviewLength, setMaxReviewLength] = useState(0)
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    getReviews( {product_id : productId, count : reviewLength} )
    .then(
      res => {reviewListUpdater(res.data.results)}
      )
    getMeta({product_id : productId})
    .then(
      res => {reviewMetaUpdater(res.data)}
    )
  }, [productId, reviewLength])

  const getMoreReviews = function() {
    reviewLengthUpdater(reviewLength + 2)
  }

  const toggleForm = function() {
    setVisibility(!visibility)
  }

  return (
    <ReviewListContainer>
      <div id='reviewSection' className = "leftSection">
      </div>
      <div className = "rightSection">
          <RnRList reviewList = {reviewList} maxLength = {maxReviewLength}/>
      </div>
      <div>
      </div>
        <div className = "moreReviewsWrapper">
          <MoreReviewButton handleClick = {getMoreReviews}/>
        </div>
        <div className = "addReviewWrapper">
          <AddReviewButton handleClick = {toggleForm}/>
        </div>
        <></>
        <div>
        </div>
        { visibility && (
        <div className="reviewFormWrapper">
          <WriteReviewStyles>
            <WriteReviewForm productMeta = {reviewMeta} />
          </WriteReviewStyles>
          </div>
        ) }
    </ReviewListContainer>
  )
}

export default RnRApp;
