import React from 'react';

const AnswerForm = ({updateData, product_name, question_body}) => {
  return(
    <div className="answer-form-wrapper">

      <div className='answer-form-container'>
        <form className='answer-form'>
          <div>
            <p>Submit your Answer</p>
            <i className="fas fa-times"></i>
          </div>

          <h3>{product_name} : {question_body}</h3>

          <label htmlFor='answer-body'><p>Your Answer :</p>
          <textarea id='answer-body' name='answer' placeholder='Example: I love this product!' maxLength='1000' required>
          </textarea>
          </label>


          <label htmlFor='answer-nickname'><p>Your nickname :</p>
          <p>
            <input id='answer-nickname' placeholder='Example: jackson11!' required/>
            <span>For privacy reasons, do not use your full name or email address</span>
          </p>
          </label>


          <label htmlFor='answer-email'><p>Your email :</p>
          <p>
            <input type='email' id='answer-email' placeholder='Example: jack@email.com' required/>
            <span>For authentication reasons, you will not be emailed</span>
          </p>
          </label>

          {/* <label htmlFor='answer-photo'><p>Add Photo : </p>
            <p>
              <input id='answer-photo' type='file' accept='image/*' name='photo' onChange={handleUploadFile}/>
              <span>up to 5 photos</span>
            </p>
          </label> */}

          <button type='submit'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default AnswerForm;