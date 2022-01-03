import React from 'react';
import { addQA } from '../../shared/api.js';

const QuestionForm = ({product_id, product_name, updateData}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = e.target.querySelector('#question-body').value;
    const name =  e.target.querySelector('#question-nickname').value;
    const email = e.target.querySelector('#question-email').value;
    const questionFormRequest = {product_id, body, name, email};
    const form = e.target;
    const photo = e.target.querySelector('#question-photo');
  }
  // ADD You must enter the following: for incompleted form request !!
  return (
    <div className="form-wrapper">
      <div className='question-form-container'>
        <form onSubmit={handleSubmit} className='question-form'>
          <div>
            <p>Ask Your Question</p>
            <i className="fas fa-times"></i>
          </div>

          <h3>About the "{product_name}"</h3>

          <label htmlFor='question-body'><p>Your Question :</p>
          <textarea id='question-body' name='question' placeholder='Example: Why did you like the product or not?' maxLength='1000' required>
          </textarea>
          </label>


          <label htmlFor='question-nickname'><p>Your nickname :</p>
          <p>
            <input id='question-nickname' placeholder='Example: jackson11!' autoComplete='off' required/>
            <span>For privacy reasons, do not use your full name or email address</span>
          </p>
          </label>


          <label htmlFor='question-email'><p>Your email :</p>
          <p>
            <input type='email' id='question-email' autoComplete='off' placeholder='Example: jack@email.com' required/>
            <span>For authentication reasons, you will not be emailed</span>
          </p>
          </label>

          <button type='submit'>Submit</button>

        </form>
    </div>
  </div>
  )
}

export default QuestionForm;