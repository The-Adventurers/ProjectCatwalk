import React, {useState, useEffect} from 'react';

const Answers = ({questions, q_index}) => {
  const allAnswers = questions[q_index].answers;

  console.log('answers', questions[q_index].answers)
  const [showAnswers, setAnswers] = useState(questions[q_index].answers.slice(0, 2))

  // let answers = questions[q_index].answers.slice(0, 2);

  const showRemainAnswers = () => {
    setAnswers(allAnswers)
  };

  console.log('answers after slice(2) ',allAnswers)

  return(
    <div>
      {showAnswers.length && <p>A:</p>}
      {showAnswers.map(ans => (
        <p style={{marginLeft:'10px'}} >{ans[1].body}</p>
      ))}
      {(allAnswers.length > 2 && showAnswers.length !== allAnswers.length) && <p onClick={showRemainAnswers} style={{fontSize: '10px', color:'grey'}}>LOAD MORE ANSWERS</p> }
    </div>
  )
}
export default Answers;