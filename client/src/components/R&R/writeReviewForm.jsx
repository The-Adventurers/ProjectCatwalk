import React from 'react';
import { ReviewButtons } from '../../../dist/RnRStyles';
import useWindowDimensions from '../../shared/useWindowDimensions';
import { useForm } from "react-hook-form";

const WriteReviewForm = function (props) {
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
        <input name="recommended?" {...register("Developer", { required: true })} type="radio" value="Yes" value="No" />
        <label>Title</label>
        <input name="reviewTitle" {...register} />
        <label>Write your review!</label>
        <input name="ReviewBody" {...register} />
        <input type="submit" className="submitButton" />
      </form>
    );
   }

export default WriteReviewForm;
