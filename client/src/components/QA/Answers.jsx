import React, {useState, useEffect} from 'react';

const Answers = ({questions, q_index}) => {
  const allAnswers = questions[q_index].answers;
  const style = { cursor: 'pointer'};

  const [showAnswers, setAnswers] = useState(questions[q_index].answers.slice(0, 2))

  // let answers = questions[q_index].answers.slice(0, 2);

  const displayAnswers = (e) => {
    if (e.target.innerHTML.includes('LOAD MORE ANSWERS')) {
      e.target.innerText = 'Collapse answers';
      setAnswers(allAnswers);
    } else {
      e.target.innerText = 'LOAD MORE ANSWERS';
      setAnswers(allAnswers.slice(0, 2));
    }
  };

  const formatDate = (date) => { //"2018-01-04T00:00:00.000Z"
    return new Date(date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric'})
  }

  return(
    <>
      {showAnswers.length &&
        <>
        {showAnswers.map((ans, index) => (
          <>
            <p>
              { index===0 && <span style={{fontWeight: 'bold'}}>A: </span>}
              <span style={index === 0
                ? {fontWeight: 'lighter', marginLeft: '0'}
                : {fontWeight: 'lighter', marginLeft: '18px'} }>
                  {ans[1].body}
              </span>
            </p>
            <p>
              <span style={{fontSize: '0.8em', color: '#7f7f7f', fontWeight: 'lighter', marginLeft: '18px'}}>
                by <span style={ans[1].answerer_name === 'Seller'? {fontWeight:'border'} : null}>{ans[1].answerer_name}</span>,&nbsp;{formatDate(ans[1].date)}
              </span>
              <span style={{color: '#7f7f7f', fontSize: '0.7em', lineHeight: 'normal', fontWeight: 'lighter'}}>
              &ensp;&nbsp;|&nbsp;&ensp;Helpful?&ensp;&nbsp;
              <span style={{textDecoration: 'underline', cursor: 'pointer'}}>
                Yes
              </span>
              <span>({ans[1].helpfulness})</span>
              <span>&ensp;|&emsp;</span>
              <span style={{textDecoration: 'underline', cursor: 'pointer'}}>
                Report
              </span>
            </span>
            </p>
          </>
        ))}
        </>
      }
      {(allAnswers.length > 2) &&
        <p onClick={displayAnswers} style={{fontSize: '0.8em', fontWeight: 'bold', color: 'grey', cursor: 'pointer'}}> <span style={{marginLeft: '18px'}}>LOAD MORE ANSWERS</span>
          { showAnswers.length !== allAnswers.length && <span>&nbsp;({allAnswers.length - showAnswers.length})</span>}
        </p> }
    </>
  )
}
export default Answers;