import React, { useState, useEffect, useContext } from 'react';
import ProductContext from '../ProductContext';
import { addQA } from '../../shared/api.js';


const AnswerForm = ({updateData, question_info}) => {
  const { currentProduct } = useContext(ProductContext);
  const [selectedImg, setImg] = useState([]);
  const [photoURL, setPhotoURL] = useState([]);


  useEffect(()=>{
  },[photoURL])

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = e.target.querySelector('#answer-body');
    const name =  e.target.querySelector('#answer-nickname');
    const email = e.target.querySelector('#answer-email');
    const answerFormRequest = {
      question_id: question_info[0],
      body: body.value,
      name: name.value,
      email: email.value,
      photos: photoURL
    };

    addQA(answerFormRequest).then(() => {
      [body, name, email].forEach(el => el.value = '');
      document.querySelector('.answer-form-wrapper').style.display = 'none';
      setPhotoURL([]);
      updateData();
    })
  }

  const checkPhotoValidation = (inputUrl, callback) => {
    const img = new  Image();
    img.onload = ()=> callback(true);
    img.onerror = ()=> callback(false);
    img.src = inputUrl;
  }

  const handleUploadFile = (e) => {
    if(e.target.getAttribute('id') === 'upload-button') {
      if (photoURL.length < 5) {
      const inputURL = e.target.previousElementSibling.value;
      checkPhotoValidation(inputURL, (validation) => {
        if (validation && photoURL.length < 5) {
          setPhotoURL([...photoURL, inputURL]);
          document.querySelector('#answer-photo').value = '';
        } else {
          alert('Invalid upload file');
        }
      })
      } else {
        alert('Sorry, You are only allowed to upload a maximum of 5 photos');
      }
    }
  }

  return(
    <div className="answer-form-wrapper">
      <div className='answer-form-container'>
        <form className='answer-form' onSubmit={handleSubmit}>
          <div>
            <p>Submit your Answer</p>
            <i className="fas fa-times"/>
          </div>
          <h3>{currentProduct.name} : {question_info[1]}</h3>
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
          <label htmlFor='answer-photo'><p>Add Photo : </p>
            <p className='upload-container'>
              <span>
                <input id='answer-photo' type='text' name='photo' placeholder='image URL'/>
                <span onClick={ handleUploadFile } id='upload-button'>UPLOAD</span>
              </span>
              <span>upload a maximum of 5 photos</span>
            </p>
          </label>
          <div id='photo-form-container'>
            {photoURL.length ? photoURL.map((url,index) => <div key={url + index}> <img alt={`photo-for-${question_info[1]}`} src={url}/> </div> ) : null}
          </div>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default AnswerForm;