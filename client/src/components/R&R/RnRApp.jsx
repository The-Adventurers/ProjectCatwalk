import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../../shared/useWindowDimensions';
import { ReviewListContainer} from '../../../dist/RnRStyles';
import { getReviews } from '../../shared/api';
import RnRList from './RnRList.jsx';
import {RnRButton, AddReviewButton} from './RnRButton.jsx';

//fetch all reviews

const RnRApp = function (props) {
  const [reviewList, reviewListUpdater] = useState([])
  const [productId, productIdUpdater] = useState(props.productId)
  const [reviewLength, reviewLengthUpdater] = useState(100)

  useEffect(() => {
    productIdUpdater(props.productId)
    getReviews( {product_id : props.productId, count : reviewLength} )
    .then(
      res => {reviewListUpdater(res.data.results)}
      )
  }, [props.productId, reviewLength])

  const { height, width } = useWindowDimensions();
  return (
    <ReviewListContainer>
        <div className = "leftSection">
            <p> This is where the summary sidebar will appear, but it is a stretch goal (Rob said so?!) </p>
        </div>
        <div className = "rightSection">
            <RnRList reviewList = {reviewList}/>
        </div>
        <div className = "moreReviewsWrapper">
          <RnRButton />
        </div>
        <div className = "addReviewWrapper">
          <AddReviewButton />
        </div>
        
    </ReviewListContainer>
  )
}



export default RnRApp;
