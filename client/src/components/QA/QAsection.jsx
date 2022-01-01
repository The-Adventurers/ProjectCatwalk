import React, { useState, useEffect } from 'react';
import { getQuestions, getAnswers } from '../../shared/api.js';
import Questions from './Questions.jsx';




const QAsection = ({ product_id }) => {

  const [allQuestions, setQuestions] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      getQuestions({ product_id, count: 1000 }).then(res => {
        let questions = res.data.results;
        // console.log('question from API>> ', res.data.results)
        questions.sort((a, b) =>
          b.question_helpfulness - a.question_helpfulness
        )
        questions.forEach(q => {
          let allAnswers = Object.entries(q.answers).sort((a,b) => b[1].helpfulness - a[1].helpfulness);
          let sellerAnswers = allAnswers.filter((el,index) => {
            if(el[1].answerer_name === 'Seller') {
              return allAnswers.splice(index, 1);
            }
          })
          q.answers = [...sellerAnswers, ...allAnswers];
        })
        setQuestions(questions);
      });
    }
    fetchData();
  }, [product_id, update]);

  // useEffect(()=>{
  //   console.log('from 2nd UEF ---------> ',allQuestions)
  // }, [allQuestions])


  return (

    <div className='main-QA'>

      <Questions questions={allQuestions} updateData={()=>setUpdate(!update)}/>
      <div className='question-form-container'>
        <div className='question-form'>

          <div> Ask Your Question
            <i className="far fa-window-close"></i>
          </div>

          <h3>About the [product name....pass in later]</h3>

          <label htmlFor='question-body'>Your Question :
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


        </div>
      </div>

    </div>
  );
};

export default QAsection;
