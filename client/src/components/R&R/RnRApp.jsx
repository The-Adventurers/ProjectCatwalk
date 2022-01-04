import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../../shared/useWindowDimensions';
import { ReviewListContainer} from '../../../dist/RnRStyles';
import { getReviews } from '../../shared/api';
import RnRList from './RnRList.jsx';

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
    .then(
      res => {
        if (res.data.results.length == reviewLength) {
          reviewLengthUpdater(reviewLength + 100)
        }
      }
    )
  }, [props.productId, reviewLength])

  const { height, width } = useWindowDimensions();
  return (
    <ReviewListContainer>
        <div className = "leftSection">
        </div>
        <div className = "rightSection">
            <RnRList reviewList = {reviewList}/>
        </div>
    </ReviewListContainer>
  )
}



export default RnRApp;
