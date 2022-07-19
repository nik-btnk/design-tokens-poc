import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing">
      <span className="landing__title">Landing Page</span>

      <div className="landing__nav">
        <Link to="/productList">
          <button className="landing__nav--productList">To Product List</button>
        </Link>
        <Link to="/cart">
          <button className="landing__nav--cart">To Cart</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing
