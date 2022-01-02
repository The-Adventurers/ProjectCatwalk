import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';
import QuestionForm from './QuestionForm.jsx';

import { updateQA, addQA } from '../../shared/api.js';
// addQA({product_id: 63609, body: 'is it required only handwash?', name:'potential-customer', email:'c@gmail.com'})

// addQA({question_id: 563152, name:'regular-customer', body:'it is best to do handwash to make it last long', email:'same@gmail.com'})


const Questions = ({questions, updateData}) => {

  const  [showQuestions, setShowQuestions] = useState([questions]);
  useEffect(()=>{
    setShowQuestions(questions.slice(0,4));
  }, [questions])



  const handleOnClick = (e) => {
    // console.log(e.target.getAttribute('voted'))
    if (e.target.tagName === 'SPAN' && ['Yes', 'Report'].includes(e.target.innerText.trim()) && e.target.getAttribute('voted') === 'false') {
      const ansId = e.nativeEvent.path[1].getAttribute('ans_id');
      const quesId = e.nativeEvent.path[2].getAttribute('q_id');
      const type = ansId ? 'answers' : 'questions';
      const section = e.target.innerText.trim() === 'Yes' ? 'helpful' : 'report';
      const target = e.target;
      section === 'report'
        ? (()=> target.innerText = 'Reported')()
        : updateQA({type, section, id: ansId || quesId}).then(()=> {
        target.setAttribute('voted', 'true')
        updateData()});
    }
    if (e.target.tagName === 'BUTTON' && e.target.innerText === 'ADD QUESTION +') {
      document.querySelector('.question-form-container').style.display = 'block'
    }
    if(e.target.tagName === 'I') {
      document.querySelector('.question-form-container').style.display = 'none'
    }
  }

  const showMoreQuestions = () => {
    let length = showQuestions.length;
    setShowQuestions(questions.slice(0, length + 2));
  }

  const question =
    <div>
      {showQuestions.map((question, index) => (
        <div key={index}>
          <p className='question' q_id={question.question_id}>
            <span> Q:&nbsp;{question.question_body} </span>
            <span>
              Helpful ?&ensp;&ensp;
              <span voted={'false'}>Yes</span>&ensp;
              <span>({question.question_helpfulness})</span>
              <span>&ensp;|&emsp;</span>
              <span>
                Add Answer
              </span>
            </span>
          </p>
        <Answers questions={showQuestions} q_index={index}/>
      </ div>
      ))}
    </div>;

  const addQuestion = <button>ADD QUESTION +</button>;

  const moreQuestions = <button onClick={showMoreQuestions}> MORE ANSWERED QUESTIONS ({questions.length - showQuestions.length})</button>;

  return(

    <div className='question-container' onClick={handleOnClick}>
      {questions.length ? question : addQuestion }

      <div name="button">
        {(questions.length > 2 && showQuestions.length < questions.length) && moreQuestions }
        {questions.length && addQuestion}
      </div>
      <QuestionForm/>
    </div>

  )
}

export default Questions;