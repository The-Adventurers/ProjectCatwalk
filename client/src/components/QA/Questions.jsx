import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';
import QuestionForm from './QuestionForm.jsx';
import AnswerForm from './AnswerForm.jsx';



import { updateQA, addQA } from '../../shared/api.js';

const Questions = ({questions, updateData, product_id, product_name, report}) => {

  const  [showQuestions, setShowQuestions] = useState([questions]);
  const [chosenQuestion, setChosenQuestion] = useState('');
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
        ? (()=> {
            target.innerText = 'Reported';
            report(ansId);
          })()
        : updateQA({type, section, id: ansId || quesId}).then(()=> {
        target.setAttribute('voted', 'true')
        updateData()});
    } else if (e.target.tagName === 'BUTTON' && e.target.innerText === 'ADD QUESTION +') {

      document.querySelector('.form-wrapper').style.display = 'block';
      document.querySelector('.question-form-container').style.display = 'block';
    } else if(e.target.tagName === 'I') {
      document.querySelector('.answer-form-wrapper').style.display = 'none';
      document.querySelector('.form-wrapper').style.display = 'none';

    } else if (e.target.tagName === 'SPAN' && e.target.innerText === 'Add Answer') {
      // console.log(e.target.getAttribute('q_body'));
      setChosenQuestion(e.target.getAttribute('q_body'));
      // document.querySelector('.form-wrapper').style.display = 'block';
      document.querySelector('.answer-form-wrapper').style.display = 'block';
      document.querySelector('.answer-form-container').style.display = 'block';
    }
    // console.log(e.target.getBoundingClientRect())
  }

  const showMoreQuestions = () => {
    let length = showQuestions.length;

    setShowQuestions(questions.slice(0, length + 2));
    // console.log(document.querySelector('[name = "button"]').getBoundingClientRect().y)
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
              <span q_body={question.question_body}>
                Add Answer
              </span>
            </span>
          </p>
        <Answers questions={showQuestions} q_index={index} product_name={product_name}/>
      </ div>
      ))}
    </div>

  const addQuestion = <button>ADD QUESTION +</button>;

  const moreQuestions = <button onClick={showMoreQuestions}> MORE ANSWERED QUESTIONS ({questions.length - showQuestions.length})</button>;
  const resizeSection = document.querySelector('[name = "button"]') ? (screen.height - document.querySelector('[name = "button"]').getBoundingClientRect().y )/screen.height * 100  < 40 ? 'singleScreen' : "" : null;
  // document.querySelector('[name = "button"]') ? console.log(document.querySelector('[name = "button"]').getBoundingClientRect().y): null;

  return(

    <div className={`question-container ${resizeSection}`} onClick={handleOnClick} >
      {questions.length ? question : addQuestion }

      <div name="button">
        {(questions.length > 2 && showQuestions.length < questions.length) ?  moreQuestions :  ''}
        {questions.length ? addQuestion : 'Loading...' }
      </div>
      <QuestionForm product_id={product_id} updateData={updateData} product_name={product_name}/>
      <AnswerForm updateData={updateData} product_name={product_name} question_body={chosenQuestion} />
    </div>

  )
}

export default Questions;