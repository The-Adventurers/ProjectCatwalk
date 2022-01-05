import React from 'react';

const SearchBar = ({questions, searchResult, keyWord}) => {
  const handleOnChange = (e) => {
      if (e.target.value.length >= 3) {
        const allResults = questions.filter(q => q.question_body.toLowerCase().includes(e.target.value.toLowerCase()));
        searchResult(allResults);
      } else {
        searchResult(questions);
      }
      keyWord(e.target.value);
  }

  return(
    <form className='search-wrapper'>
      <input id='search' type='search' placeholder=' Have a question?  Search for answers… ' minLength='3' autoComplete='off' onChange={handleOnChange}/><i className="fas fa-search"></i>
    </form>
  )
}

export default SearchBar;