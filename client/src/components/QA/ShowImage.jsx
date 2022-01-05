import React, { useEffect, useState } from 'react';

const ShowImage = ({images}) => {
  const [currentCollection, setCollection] = useState([]);
  useEffect (()=> {
    setCollection(images.slice(1))
  }, [images])


  const handleOnClick = (e) => {
    if (e.target.tagName === 'I') {
      document.querySelector('.gallery-wrapper').style.display = 'none';
      document.querySelector('.gallery-container').style.display = 'none';
    }
  }

  return(
  <div className='gallery-wrapper'>

    <div className='gallery-container' onClick={handleOnClick}>
    <i className="fas fa-times"></i>
     <div className='image-container'>{images.length ? currentCollection.map(el => <img className='slider' src={el} alt='imageFromAnswer'></img>) : null}</div>
    </div>

  </div>
  )
}

export default ShowImage;