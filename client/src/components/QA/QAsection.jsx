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

  console.log('all questions pass to others components', allQuestions)

  return (

    <div className='main-QA'>
      <Questions questions={allQuestions}/>
    </div>
  );
};

export default QAsection;
