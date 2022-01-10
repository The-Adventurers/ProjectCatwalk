import React, { useState, useEffect, useContext } from 'react';
import ProductContext from '../ProductContext';
import { getQuestions, updateQA } from '../../shared/api.js';
import Questions from './Questions.jsx';

const QAsection = () => {
  const { productId } = useContext(ProductContext);
  const [allQuestions, setQuestions] = useState([]);
  const [update, setUpdate] = useState(false);
  const [reportedAns, setReportedAns] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      getQuestions({ product_id: productId, count: 1000 }).then(res => {
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
  }, [productId, update]);

  useEffect(()=>{
      if(reportedAns.length) {
        reportedAns.forEach(id => updateQA({type:'answers', section:'report', id}))
      }
    }
  , [productId]);

  const report = (id) => {
    setReportedAns([...reportedAns, id]);
  }

  return (
    <div id='main-QA' className='main-QA'>
      <p id='header'>QUESTIONS & ANSWERS</p>
      <Questions questions={allQuestions} updateData={()=>setUpdate(!update)} report = {report} />
    </div>
  );
};

export default QAsection;
