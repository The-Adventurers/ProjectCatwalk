import React from 'react';
import { addQA } from '../../shared/api.js';

const QuestionForm = ({product_id, product_name, updateData}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = e.target.querySelector('#question-body');
    const name =  e.target.querySelector('#question-nickname');
    const email = e.target.querySelector('#question-email');
    const questionFormRequest = {product_id, body: body.value, name: name.value, email: email.value};

    addQA(questionFormRequest).then(() => {
      [body, name, email].forEach(el => el.value = '');
      document.querySelector('.form-wrapper').style.display = 'none';
      updateData();
    })
  }

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