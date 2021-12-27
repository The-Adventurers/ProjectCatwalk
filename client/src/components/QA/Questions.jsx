import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';

const Questions = ({questions}) => {

  const  [showQuestions, setShowQuestions] = useState([]);
  const style = { cursor: 'pointer'}

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
          <p style={{display:'flex', justifyContent: 'space-between', fontWeight: 'bold'}}>
            <span> Q:&nbsp;{question.question_body} </span>
            <span style={{color: 'grey', fontSize: '0.7em', lineHeight: 'normal', fontWeight: 'lighter'}}>
              Helpful?&nbsp;&nbsp;
              <span style={{textDecoration: 'underline', cursor: 'pointer'}}>
                Yes
              </span>
              <span>({question.question_helpfulness})</span>
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <span style={{textDecoration: 'underline', cursor: 'pointer'}}>
                Add Answer
              </span>
            </span>
          </p>
        <Answers questions={questions} q_index={index}/>
      </>
      ))}
    </div>;


  //add Q button
  const addQuestion = <button style={style}>ADD QUESTION +</button>;

  //more Q button
  const moreQuestions = <button onClick={showMoreQuestions} style={style}>MORE ANSWERED QUESTIONS</button>;

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