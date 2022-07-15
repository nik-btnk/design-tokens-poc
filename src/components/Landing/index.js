import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing">
      <span className="landing__title">Landing Page</span>

      <div className="landing__nav">
        <Link to="/shop">
          <button className="landing__nav--shop">To Shop</button>
        </Link>
        <Link to="/cart">
          <button className="landing__nav--cart">To Cart</button>
        </Link>
        <button id="test">TEST</button>
      </div>
    </div>
  )
}

export default Landing
