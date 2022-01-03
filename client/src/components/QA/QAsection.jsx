import React, { useState, useEffect } from 'react';
import { getQuestions, updateQA } from '../../shared/api.js';
import Questions from './Questions.jsx';

const QAsection = ({ product_id , product_name}) => {

  const [allQuestions, setQuestions] = useState([]);
  const [update, setUpdate] = useState(false);
  const [reportedAns, setReportedAns] = useState([]);


  useEffect(() => {
    const fetchData = () => {
      getQuestions({ product_id, count: 1000 }).then(res => {
        let questions = res.data.results;
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

  useEffect(()=>{
    return ()=> {
      if(reportedAns.length) {
        reportedAns.forEach(id => updateQA({type:'answers', section:'report', id}))
      }
    }
  }
  , [product_id])

  return (

    <div className='main-QA' >
      <input type='search' placeholder='search'/>
      <Questions questions={allQuestions} product_id={product_id} product_name={product_name}  updateData={()=>setUpdate(!update)} report = {(id) => {
        setReportedAns([...reportedAns, id]);
        }} />
    </div>
  );
};

export default QAsection;
