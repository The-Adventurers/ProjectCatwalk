import React from 'react';

const NavBar = ({ defaultProductId}) => {
  return (
    <nav>
      <div><a id='brand' onClick={()=>  defaultProductId(63616)}>BOUNDLESS BUCKEYE</a></div>
      <div>
        <div id='linkSection'>
          <a href='#OverviewSection'>Product</a>
          <a href='#relatedProductSection'>Related Products</a>
          <a href='#main-QA'>Q & A</a>
          <a href='#reviewSection'>Reviews</a>
        </div>
      </div>
      <div>
        <i className="fas fa-home" onClick={()=>  defaultProductId(63616)}/>
        <i className="far fa-envelope"/>
        <i className="fas fa-shopping-cart"/>
        <span>Sign In</span>
        <i className="fas fa-bars"></i>
      </div>

    </nav>
  )
}

export default NavBar;