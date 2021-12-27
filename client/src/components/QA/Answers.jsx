import React from 'react';

const Answers = ({questions, q_index}) => {
  console.log('answers', questions[q_index].answers)

  let answers = questions[q_index].answers.slice(0, 2);

  const showRemainAnswers = () => {
    answers = questions[q_index].answers.map(ans => ans[1])
    console.log('from click, >>', answers)
    return answers;
  };

  console.log('answers after slice(2) ',answers)
  
  return(
    <div>
      {answers.length && <p>A:</p>}
      {answers.map(ans => (
        <p style={{marginLeft:'10px'}} >{ans[1].body}</p>
      ))}
      {(questions[q_index].answers.length > 2 && answers.length !== questions[q_index].answers) && <p onClick={showRemainAnswers} style={{fontSize: '10px', color:'grey'}}>LOAD MORE ANSWERS</p> }
    </div>
  )
}
export default Answers;