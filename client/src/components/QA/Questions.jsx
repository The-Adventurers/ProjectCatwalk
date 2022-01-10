import React, { useState, useEffect, useContext } from 'react';
import ProductContext from '../ProductContext';
import Answers from './Answers.jsx';
import QuestionForm from './QuestionForm.jsx';
import AnswerForm from './AnswerForm.jsx';
import SearchBar from './SearchBar.jsx';
import Modal from './Modal.jsx';
import { updateQA } from '../../shared/api.js';

const Questions = ({questions, updateData, report}) => {
  const { productId, currentProduct } = useContext(ProductContext);
  const [showQuestions, setShowQuestions] = useState([questions]);
  const [chosenQuestion, setChosenQuestion] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [resizeSection, setResize] = useState(0);
  const [clickMoreQ, setClick] = useState(false);
  const [showPhoto, setShowPhoto] = useState([]);

  useEffect(()=>{
    setShowQuestions(questions.slice(0,4));
    return () => { setResize(0)}
  }, [questions]);

  useEffect(()=>{
    setShowQuestions(searchResult.slice(0, 4))
    return () => { setResize(0)}
  },[searchResult]);

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
    } else if (e.target.tagName === 'BUTTON' && e.target.innerText.includes('ADD QUESTION')) {
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
    <>
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
        <Answers questions={showQuestions} q_index={index} getPhoto={setShowPhoto}/>
      </ div>
      ))}
    </>

  const addQuestion = <button> ADD QUESTION <i class="fas fa-plus"/></button>;
  const moreQuestions = <button onClick={ () => {
    showMoreQuestions();
    setResize(resizeSection + 1);
    }}> MORE ANSWERED QUESTIONS ({ keyWord.length > 2 ? searchResult.length - showQuestions.length : questions.length - showQuestions.length})</button>;

  return(
    <div onClick={handleOnClick} >
      <SearchBar questions={questions} searchResult={setSearchResult} keyWord={setKeyWord}/>
      <div className={`question-container ${resizeSection >= 2 ? 'singleScreen' : ''}`}>
        {questions.length ? question : addQuestion }
      </div>
        <div name="button">
          {keyWord.length > 2 ? ((searchResult.length > 2 && showQuestions.length < searchResult.length) ? moreQuestions : ''):((questions.length > 2 && showQuestions.length < questions.length) ?  moreQuestions : '')}
          {questions.length ? addQuestion : 'Loading...' }
        </div>
        <QuestionForm updateData={updateData}/>
        <AnswerForm updateData={updateData} question_info={chosenQuestion} />
        {showPhoto.length ? <Modal showPhoto={showPhoto} setShowPhoto={setShowPhoto}/> : null}

    </div>
  )
}

export default Questions;