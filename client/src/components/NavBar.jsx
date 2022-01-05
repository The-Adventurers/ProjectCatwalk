import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div><span>boundless-buckeye</span></div>
      <div>
        <i className="fas fa-home"/><span>Home</span>
        <i className="far fa-envelope"/><span>Message</span>
        <i className="fas fa-shopping-cart"/><span>Cart</span>
        <span>Sign In</span>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  )
}

export default NavBar;