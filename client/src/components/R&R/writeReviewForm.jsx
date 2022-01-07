import React, { useState, useEffect } from 'react';
import { ReviewButtons } from '../../../dist/RnRStyles';
import { useForm } from "react-hook-form";

const WriteReviewForm = function (props) {
  const [size, showSize] = useState(false)
  const [width, showWidth] = useState(false)
  const [comfort, showComfort] = useState(false)
  const [quality, showQuality] = useState(false)
  const [length, showLength] = useState(false)
  const [fit, showFit] = useState(false)

  useEffect(() => {
    if ("Size" in props.productMeta.characteristics) {
      showSize(true)
    }
    if ("Width" in props.productMeta.characteristics) {
      showWidth(true)
    }
    if ("Comfort" in props.productMeta.characteristics) {
      showComfort(true)
    }
    if ("Quality" in props.productMeta.characteristics) {
      showQuality(true)
    }
    if ("Length" in props.productMeta.characteristics) {
      showLength(true)
    }
    if ("Fit" in props.productMeta.characteristics) {
      showFit(true)
    }
  }, [props.productId])

  const inputs = [
    <label>
          1<input style={{width : "2%"}} name="recommendNo" type = "radio" />&nbsp;
          2<input style={{width : "2%"}} name="recommendNo" type = "radio" />&nbsp;
          3<input style={{width : "2%"}} name="recommendNo" type = "radio" />&nbsp;
          4<input style={{width : "2%"}} name="recommendNo" type = "radio" />&nbsp;
          5<input style={{width : "2%"}} name="recommendNo" type = "radio" />
    </label>
  ];
  const { register } = useForm();
  return (
    <form>
      <label>Nickname</label>
      <input name="nickname" {...register} />
      <label>Your Email</label>
      <input name="email" {...register} />
      <label>Overall Rating</label>
      <input name="rating" {...register} />
      <label>Do you recommend this product?</label>
      <label>
        <input style={{width : "10px"}} name="recommendYes" type = "radio" value = "Male" name = "gender" />Yes
        <input style={{width : "10px"}} name="recommendNo" type = "radio" value = "Male" name = "gender" />No
      </label>

      {size && (
      <div>
        <label> Size (1 = A size too small, 3 = Perfect, 5 = A size too wide)</label>
        {inputs}
      </div>
        )
      }

      {width && (
      <div>
        <label>Width (1 = Too narrow, 3 = Perfect, 5 = Too wide)</label>
        {inputs}
      </div>
      )
      }

      {comfort && (
      <div>
        <label>Comfort (1 = Uncomfortable, 3 = Ok, 5 = Perfect)</label>
        {inputs}
      </div>
      )
      }

      {quality && (
      <div>
        <label>Quality (1 = Poor, 3 = What I expected, 5 = Perfect)</label>
        {inputs}
      </div>
      )
      }

      {length && (
      <div>
        <label>Length (1 = Runs short, 3 = Perfect, 5 = Runs long)</label>
        {inputs}
      </div>
      )
      }

      {fit && (
      <div>
        <label>Fit (1 = Runs tight, 3 = Perfect, 5 = A size too wide)</label>
        {inputs}
      </div>
      )
      }
      <label>Title</label>
      <input name="reviewTitle" {...register} />
      <label>Write your review! (Drag bottom left corner to expand) </label>
      <textarea name = "ReviewBody"></textarea>
      <input type="submit" className="submitButton" />
    </form>
  );
  }

export default WriteReviewForm;
