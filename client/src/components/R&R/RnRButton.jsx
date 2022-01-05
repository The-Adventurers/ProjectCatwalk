import React from 'react';
import { ReviewButtons } from '../../../dist/RnRStyles';
import useWindowDimensions from '../../shared/useWindowDimensions';

const MoreReviewButton = function (props) {
  return (
    <>
      <ReviewButtons onClick = {props.handleClick}>
        MORE REVIEWS
      </ReviewButtons>
    </>
  )
}

const AddReviewButton = function (props) {
  return (
    <>
      <ReviewButtons onClick = {props.handleClick}>
        ADD A REVIEW +
      </ReviewButtons>
    </>
  )
}


export {MoreReviewButton, AddReviewButton};
