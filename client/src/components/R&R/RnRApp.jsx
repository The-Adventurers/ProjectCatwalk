import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../../shared/useWindowDimensions';
import { ReviewListContainer, WriteReviewStyles} from '../../../dist/RnRStyles';
import { getReviews } from '../../shared/api';
import RnRList from './RnRList.jsx';
import { AddReviewButton, MoreReviewButton} from './RnRButton.jsx';
import WriteReviewForm from './writeReviewForm.jsx';

//fetch all reviews

const RnRApp = function (props) {
  const [reviewList, reviewListUpdater] = useState([])
  const [productId, productIdUpdater] = useState(props.productId)
  const [reviewLength, reviewLengthUpdater] = useState(2)
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    productIdUpdater(props.productId)
    getReviews( {product_id : props.productId, count : reviewLength} )
    .then(
      res => {reviewListUpdater(res.data.results)}
      )
  }, [props.productId, reviewLength, reviewList])

  const getMoreReviews = function() {
    reviewLengthUpdater(reviewLength + 2)
  }

  const toggleForm = function() {
    setVisibility(!visibility)
  }

  return (
    <ReviewListContainer>
        <div className = "leftSection">
            <p> This is where the summary sidebar will appear, but it is a stretch goal (Rob said so?) </p>
        </div>
        <div className = "rightSection">
            <RnRList reviewList = {reviewList}/>
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
            <WriteReviewForm />
          </WriteReviewStyles>
          </div>
        ) }
    </ReviewListContainer>
  )
}



export default RnRApp;
