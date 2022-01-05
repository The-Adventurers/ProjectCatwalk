import React from 'react';
import { ReviewButtons } from '../../../dist/RnRStyles';
import useWindowDimensions from '../../shared/useWindowDimensions';

const RnRButton = function (props) {
  return (
    <>
      <ReviewButtons>
        MORE REVIEWS
      </ReviewButtons>
    </>
  )
}

const AddReviewButton = function (props) {
  return (
    <>
      <ReviewButtons>
        ADD A REVIEW +
      </ReviewButtons>
    </>
  )
}


export {RnRButton, AddReviewButton};
