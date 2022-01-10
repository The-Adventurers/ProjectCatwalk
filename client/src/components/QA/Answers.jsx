import React, { useState, useEffect, useContext } from 'react';
import ProductContext from '../ProductContext';

const Answers = ({questions, q_index, getPhoto}) => {
  const { currentProduct } = useContext(ProductContext);
  const allAnswers = questions[q_index].answers;
  const [showAnswers, setAnswers] = useState([]);


  useEffect(()=>{
    setAnswers(questions[q_index].answers.slice(0, 2))
  }, [questions])

  const displayAnswers = (e) => {
    if (e.target.innerText.includes('LOAD MORE ANSWERS')) {
      e.target.innerText = 'COLLAPSE ANSWERS';
      setAnswers(allAnswers);
    } else if (e.target.innerText.includes('COLLAPSE ANSWERS')){
      e.target.innerText = 'LOAD MORE ANSWERS';
      setAnswers(allAnswers.slice(0, 2));
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric'})
  }

  const showImage = (index, allSrc) => {
    getPhoto([index, allSrc])
  }

  return(
    <>
      {showAnswers.length > 0 &&
        <div className='answers-container'>
        {showAnswers.map((ans, index) => (
          <div key={ans[0]}>
            <p >
              { index===0 && <span className='answer'>A: </span>}
              <span className = { index === 0 ? 'first-answer' : 'regular-answer' }>
                {ans[1].body}
              </span>
              <br/>
              {ans[1].photos.length ?
                 <span className='photos'>
                   {ans[1].photos.map((photo, index) => <img key={index} src={photo} onError={(e) => {
                     e.target.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
                   }} alt={`answer-photo-${ans[0]}-productName-${currentProduct.name}`} onClick={()=>showImage(index, ans[1].photos)}/>)}
                 </span> : null
              }
            </p>
            <p className='answer-info-container' ans_id={ans[0]}>
              <span className='answer-info'> by</span>
              <span  className={ans[1].answerer_name.toLowerCase() === 'seller'? 'seller' : 'user'}>&ensp;{ans[1].answerer_name}
              </span>
              <span className='answer-info'>
                ,&nbsp;{formatDate(ans[1].date)}
              </span>
              <span className='answer-info'>
                &ensp;&nbsp;|&nbsp;&ensp;Helpful ?&ensp;&nbsp;
              </span>
              <span voted={'false'}> Yes</span>&ensp;
              <span>({ans[1].helpfulness})</span>
              <span>&ensp;|&emsp;</span>
              <span voted={'false'}> Report </span>
            </p>
          </div>
        ))}
        </div>
      }
      {(allAnswers.length > 2)
        ? <p className='more-answer'><span onClick={displayAnswers} >LOAD MORE ANSWERS</span>
          { showAnswers.length !== allAnswers.length && <span>&nbsp;({allAnswers.length - showAnswers.length})</span>}
         </p>
        : null
      }
    </>
  )
}
export default Answers;