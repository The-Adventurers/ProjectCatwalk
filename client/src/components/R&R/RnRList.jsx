import React from 'react';
import useWindowDimensions from '../../shared/useWindowDimensions';

const RnRList = function (props) {
  if (props.reviewList.length == 0) {
    return (
      <>
        <p>There are no reviews. . . be the first to write one!</p>
      </>
    )
  }
  let myArray = [];
  const { height, width } = useWindowDimensions();
    myArray = props.reviewList.map(function (listItem) {
    const starConverter = 
    {0 : "☆☆☆☆☆",
    1 : "★☆☆☆☆",
    2 : "★★☆☆☆",
    3 : "★★★☆☆",
    4 : "★★★★☆",
    5 : "★★★★★"}

    if (listItem.recommend) {
      return (
        <div className = "reviewItem" key = {listItem.review_id}> 
        {starConverter[listItem.rating]} 
        <h3>{listItem.summary}</h3>
        <p> {listItem.body} </p>
        <p> ✓ I recommend this product </p>
        <hr></hr>
        </div>
      )
    }
    else {
      return (
      <div className = "reviewItem" key = {listItem.review_id}> 
      {starConverter[listItem.rating]} 
      <h3>{listItem.summary}</h3>
      <p> {listItem.body} </p>
      <hr></hr>
      </div>
      )
      }
    }
    )

  return (
    <>
      {myArray}
    </>
  )
}


export default RnRList;
