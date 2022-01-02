import React from 'react';

const QuestionForm = () => {
  return (
    <div className='question-form-container'>
    <form className='question-form'>

      <div>
        <p>Ask Your Question</p>
        <i className="far fa-window-close"></i>
      </div>

      <h3>About the [product name....pass in later]</h3>

      <label htmlFor='question-body'><p>Your Question :</p>
      <textarea id='question-body' name='question' placeholder='Why did you like the product or not?' maxLength='1000'>
      </textarea>
      </label>


      <label htmlFor='question-nickname'><p>What is your nickname :</p>
      <p>
        <input id='question-nickname' placeholder='Example: jackson11!'></input>
        <span>For privacy reasons, do not use your full name or email address</span>
      </p>
      </label>


      <label htmlFor='question-email'><p>Your email :</p>
      <p>
        <input type='email' id='question-email' placeholder='Example@example.com' required></input>
        <span>For authentication reasons, you will not be emailed</span>
      </p>
      </label>

      <button>Submit</button>


    </form>
  </div>
  )
}

export default QuestionForm;