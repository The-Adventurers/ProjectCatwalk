import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div><span>BOUNDLESS BUCKEYE</span></div>
      <div>
        <i className="fas fa-home"/>
        <i className="far fa-envelope"/>
        <i className="fas fa-shopping-cart"/>
        <span>Sign In</span>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  )
}

export default NavBar;