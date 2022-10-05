// Modules
import React from 'react'
import { Link } from 'react-router-dom'

// Utils
import { path } from '../../constants'

const Cart = () => {
  return (
    <div className="cart">
      <span className="cart__title">Cart Page</span>

      <div className="cart__nav">
        <Link to={path.LANDING}>
          <button className="cart__nav--shop">To Landing</button>
        </Link>
        <Link to={path.PRODUCTS}>
          <button className="cart__nav--productList">To Product List</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
