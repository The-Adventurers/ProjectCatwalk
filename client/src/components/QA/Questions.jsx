import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';

const Questions = ({questions}) => {

  const  [showQuestions, setShowQuestions] = useState([]);

  useEffect(()=>{
    setShowQuestions(questions.slice(0,4));
    console.log('inside useEffect' ,showQuestions)
  }, [questions])

  const showMoreQuestions = () => {
    let length = showQuestions.length;
    setShowQuestions(questions.slice(0, length + 2));
  }

  // show Q

  const question =
    <div>
      {showQuestions.map((question, index) => (
        <>
        <p>Q:
        <span>{question.question_body}</span>
      </p>
        <Answers questions={questions} q_index={index}/>
        </>
      ))}
    </div>;


  //add Q button
  const addQuestion = <button>ADD QUESTION +</button>;

  //more Q button
  const moreQuestions = <button onClick={showMoreQuestions} >MORE ANSWERED QUESTIONS</button>;

  return(

    <div>
      {questions.length ? question : addQuestion }

      <div name="button">
        {(questions.length > 2 && showQuestions.length < questions.length) && moreQuestions }
        {questions.length && addQuestion}
      </div>
    </div>

  )
}

export default Questions;