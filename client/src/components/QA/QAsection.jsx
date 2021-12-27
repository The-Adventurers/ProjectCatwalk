import React, { useState, useEffect } from 'react';
import { getQuestions, getAnswers } from '../../shared/api.js';
import Questions from './Questions.jsx';


const QAsection = ({ product_id }) => {
  const [allQuestions, setQuestions] = useState([])

  useEffect(() => {
    const fetchData = () => {
      getQuestions({ product_id }).then(res => { //if no question
        let questions = res.data.results;
        questions.sort((a, b) =>
          b.question_helpfulness - a.question_helpfulness
        )
        //loop over it
        questions.forEach(q => {
          let allAnswers = Object.entries(q.answers).sort((a,b) => b[1].helpfulness - a[1].helpfulness);
          let sellerAnswers = allAnswers.filter((el,index) => {
            if(el[1].answerer_name === 'Seller') { //case sensitive?
              return allAnswers.splice(index, 1);
            }
          })
          q.answers = [...sellerAnswers, ...allAnswers]; //sort answers Seller -> helpfulness
        })
        setQuestions(questions);// if no answers
      });
    }
    fetchData();
  }, [product_id]);

  // const getAnswers = (questionIndex) => {
  //   const answers = Object.entries(allQuestions[questionIndex].answers);
  //   return answers
  // }


  console.log('all questions pass to others components', allQuestions)

  return (

    <>
      <Questions questions={allQuestions}/>
      {/* {allQuestions.slice(0,4).map((q,index) => (
        <div>
          <p key={q.question_id}>Q: <span>{q.question_body}</span></p>
          <div>A: {getAnswers(index).slice(0, 2).map(a =>  <ul>{a[1].body}</ul>)}</div>
        </div>
      ))} */}
    </>
  );
};

export default QAsection;
