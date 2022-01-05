import React from 'react';

const SearchBar = ({questions, searchedQ}) => {
  const handleOnChange = (e) => {
    if(e.target.value.length >= 3) {
      const searchKey = questions.filter(q => q.question_body.toLowerCase().includes(e.target.value.toLowerCase()));
      searchedQ([e.target.value.toLowerCase(), ...searchKey]);
    } else {
      searchedQ(['', ...questions])
    }
  }

  return(
    <form className='search-wrapper'>
      <input id='search' type='search' placeholder=' Have a question?  Search for answers… ' minLength='3' autoComplete='off' onChange={handleOnChange}/><i className="fas fa-search"></i>
    </form>
  )
}

export default SearchBar;