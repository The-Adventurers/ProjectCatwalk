import React from 'react';

const Modal = ({showPhoto, setShowPhoto}) => {
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
    <div className='showImage-container' onClick={handleImgOnClick}>
      <i className="fas fa-times"/>
      {<div className='img-frame'>
        <i className="fas fa-angle-left" style={showPhoto[0] === 0 ? {color: 'rgba(0, 0, 0, 0)'} : null}/>
        <img src={showPhoto[1][showPhoto[0]]} alt={'answer-img'} onError={(e) => {
          e.target.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
        }} />
        <i className="fas fa-angle-right" style={showPhoto[0] === showPhoto[1].length - 1 ? {color: 'rgba(0, 0, 0, 0)'} : null}/>
      </div>}
    </div>
  )
}

export default Modal;