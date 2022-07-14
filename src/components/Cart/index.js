import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className="cart">
      <span className="cart__title">Cart Page</span>

      <div className="cart__nav">
        <Link to="/">
          <button className="cart__nav--shop">To Landing</button>
        </Link>
        <Link to="/shop">
          <button className="cart__nav--cart">To Shop</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
