// Modules
import React from 'react'
import { Link } from 'react-router-dom'

// Utils
import { path } from '../../constants'

const Landing = () => {
  return (
    <div className="landing">
      <span className="landing__title">Landing Page</span>

      <div className="landing__nav">
        <Link to={path.PRODUCTS}>
          <button className="landing__nav--productList">To Product List</button>
        </Link>
        <Link to={path.CART}>
          <button className="landing__nav--cart">To Cart</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing
