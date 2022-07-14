import React from 'react'
import { Link } from 'react-router-dom'

const Storefront = () => {
  return (
    <div className="storefront">
      <span className="storefront__title">Storefront Page</span>

      <div className="storefront__nav">
        <Link to="/">
          <button className="storefront__nav--shop">To Landing</button>
        </Link>
        <Link to="/cart">
          <button className="storefront__nav--cart">To Cart</button>
        </Link>
      </div>
    </div>
  )
}

export default Storefront
