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
          </div>
  );
};

export default QAsection;
