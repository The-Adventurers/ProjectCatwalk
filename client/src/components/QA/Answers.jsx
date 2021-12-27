import React, {useState, useEffect} from 'react';

const Answers = ({questions, q_index}) => {
  const allAnswers = questions[q_index].answers;
  const style = { cursor: 'pointer'};

  console.log('answers', questions[q_index].answers)
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

  console.log('answers after slice(2) ',allAnswers)

  return(
    <div>
      {showAnswers.length && <p>A:</p>}
      {showAnswers.map(ans => (
        <p style={{marginLeft:'10px'}} >{ans[1].body}</p>
      ))}
      {(allAnswers.length > 2) &&
        <p onClick={displayAnswers} style={{fontSize: '10px', color:'grey', cursor: 'pointer'}}> LOAD MORE ANSWERS
          <span>&nbsp;({allAnswers.length - showAnswers.length})</span>
        </p> }
    </div>
  )
}
export default Answers;