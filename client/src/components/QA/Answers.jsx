import React, {useState, useEffect} from 'react';

const Answers = ({questions, q_index}) => {
  // console.log( 'before hit undefined--->',questions)
  // console.log( 'before hit undefined--->',q_index)
  const allAnswers = questions[q_index].answers;
  const [showAnswers, setAnswers] = useState([]);

  useEffect(()=>{
    setAnswers(questions[q_index].answers.slice(0, 2))
  }, [questions])

  const displayAnswers = (e) => {
    if (e.target.innerHTML.includes('LOAD MORE ANSWERS')) {
      e.target.innerText = 'COLLAPSE ANSWERS';
      setAnswers(allAnswers);
    } else {
      e.target.innerText = 'LOAD MORE ANSWERS';
      setAnswers(allAnswers.slice(0, 2));
    }
  };

  const formatDate = (date) => { //"2018-01-04T00:00:00.000Z"
    return new Date(date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric'})
  }
//  console.log(allAnswers)
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
            </p>
            <p className='answer-info-container' ans_id={ans[0]}>
              <span className='answer-info'> by</span>
              <span  className={ans[1].answerer_name === 'Seller'? 'seller' : 'user'}>&ensp;{ans[1].answerer_name}
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
      {(allAnswers.length > 2) &&
        <p className='more-answer'onClick={displayAnswers} > <span>LOAD MORE ANSWERS</span>
          { showAnswers.length !== allAnswers.length && <span>&nbsp;({allAnswers.length - showAnswers.length})</span>}
        </p> }
    </>
  )
}
export default Answers;