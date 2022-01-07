import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';
import QuestionForm from './QuestionForm.jsx';
import AnswerForm from './AnswerForm.jsx';
import SearchBar from './SearchBar.jsx';
import { updateQA } from '../../shared/api.js';

const Questions = ({questions, updateData, product_id, product_name, report}) => {

  const [showQuestions, setShowQuestions] = useState([questions]);
  const [chosenQuestion, setChosenQuestion] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [resizeSection, setResize] = useState(null);
  const [clickMoreQ, setClick] = useState(false);
  const [showPhoto, setShowPhoto] = useState([]);
  useEffect(()=>{
    setShowQuestions(questions.slice(0,4));
  }, [questions]);

  useEffect(()=>{
    setShowQuestions(searchResult.slice(0, 4))
  },[searchResult]);

  useEffect(()=> {
    return ()=>{
      const currentContentSize = document.querySelector('.question-container').getBoundingClientRect();
      const { bottom, top } = currentContentSize;
      const currentRatio = (bottom - Math.abs(top)) / screen.height * 100;
      if(currentRatio > 65 && clickMoreQ) {
      setResize('singleScreen')}
    }
  },[showQuestions])

  document.body.style.overflow =   showPhoto.length ? 'hidden' : 'auto';

  const handleOnClick = (e) => {
    if (e.target.tagName === 'SPAN' && ['Yes', 'Report'].includes(e.target.innerText.trim()) && e.target.getAttribute('voted') === 'false') {
      const ansId = e.nativeEvent.path[1].getAttribute('ans_id');
      const quesId = e.nativeEvent.path[2].getAttribute('q_id');
      const type = ansId ? 'answers' : 'questions';
      const section = e.target.innerText.trim() === 'Yes' ? 'helpful' : 'report';
      const target = e.target;
      section === 'report'
        ? (()=> {
            target.innerText = 'Reported';
            report(ansId);
          })()
        : updateQA({type, section, id: ansId || quesId}).then(()=> {
        target.setAttribute('voted', 'true')
        updateData()});
    } else if (e.target.tagName === 'BUTTON' && e.target.innerText === 'ADD QUESTION +') {
      document.querySelector('.form-wrapper').style.display = 'block';
      document.querySelector('.question-form-container').style.display = 'block';
    } else if(e.target.tagName === 'I') {
      document.querySelector('.answer-form-wrapper').style.display = 'none';
      document.querySelector('.form-wrapper').style.display = 'none';
    } else if (e.target.tagName === 'SPAN' && e.target.innerText === 'Add Answer') {
      setChosenQuestion([e.target.getAttribute('q_id'), e.target.getAttribute('q_body')]);
      document.querySelector('.answer-form-wrapper').style.display = 'block';
      document.querySelector('.answer-form-container').style.display = 'block';
    }
  }

  const showMoreQuestions = () => {
    let length = showQuestions.length;
    setClick(true);
    if (keyWord.length > 2) {
      setShowQuestions(searchResult.slice(0, length + 2));
    } else {
      setShowQuestions(questions.slice(0, length + 2));
    }
  }

  const question =
    <div>
      {showQuestions.map((question, index) => (
        <div key={index}>
          <p className='question' q_id={question.question_id}>
            <span> Q:&nbsp;{question.question_body} </span>
            <span>
              Helpful ?&ensp;&ensp;
              <span voted={'false'}>Yes</span>&ensp;
              <span>({question.question_helpfulness})</span>
              <span>&ensp;|&emsp;</span>
              <span q_body={question.question_body} q_id={question.question_id}>
                Add Answer
              </span>
            </span>
          </p>
        <Answers questions={showQuestions} q_index={index} product_name={product_name} getPhoto={setShowPhoto}/>
      </ div>
      ))}
    </div>

  const addQuestion = <button>ADD QUESTION +</button>;
  const moreQuestions = <button onClick={showMoreQuestions}> MORE ANSWERED QUESTIONS ({ keyWord.length > 2 ? searchResult.length - showQuestions.length : questions.length - showQuestions.length})</button>;
  const handleImgOnClick = (e) => {
    if(e.target.tagName === 'I') {
      const target = e.target.className;
      if (target.includes('times')) {
        setShowPhoto([]);
      } else if (target.includes('left') && showPhoto[0] > 0) {
        setShowPhoto([showPhoto[0] - 1, showPhoto[1]]);
      } else if (target.includes('right') && showPhoto[0] < showPhoto[1].length - 1) {
          setShowPhoto([showPhoto[0] + 1, showPhoto[1]]);
      }
    } else if (e.target.tagName !== 'IMG') {
      setShowPhoto([]);
    }
  }

  return(
    <>
      <SearchBar questions={questions} searchResult={setSearchResult} keyWord={setKeyWord}/>
      <div className={`question-container ${resizeSection}`} onClick={handleOnClick} >
        {questions.length ? question : addQuestion }
        <div name="button">
          {keyWord.length > 2 ? ((searchResult.length > 2 && showQuestions.length < searchResult.length) ? moreQuestions : ''):((questions.length > 2 && showQuestions.length < questions.length) ?  moreQuestions : '')}
          {questions.length ? addQuestion : 'Loading...' }
        </div>
        <QuestionForm product_id={product_id} updateData={updateData} product_name={product_name}/>
        <AnswerForm updateData={updateData} product_name={product_name} question_info={chosenQuestion} />
        {showPhoto.length ? <div className='showImage-container' onClick={handleImgOnClick}> <i className="fas fa-times"/>{<div className='img-frame'><i className="fas fa-angle-left" style={showPhoto[0] === 0 ? {color: 'rgba(0, 0, 0, 0)'} : null}/><img src={showPhoto[1][showPhoto[0]]} alt={'answer-img'} onError={(e) => {
            e.target.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
          }} /><i className="fas fa-angle-right" style={showPhoto[0] === showPhoto[1].length - 1 ? {color: 'rgba(0, 0, 0, 0)'} : null}/></div>}
        </div> : null}
      </div>
    </>
  )
}

export default Questions;