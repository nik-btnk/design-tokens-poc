import React from 'react'
import { Link } from 'react-router-dom'

const Storefront = () => {
  return (
    <div className="productList">
      <span className="productList__title">Product List</span>

      <div className="productList__nav">
        <Link to="/">
          <button className="productList__nav--shop">To Landing</button>
        </Link>
        <Link to="/cart">
          <button className="productList__nav--cart">To Cart</button>
        </Link>
      </div>
    </div>
  )
}

export default Storefront
