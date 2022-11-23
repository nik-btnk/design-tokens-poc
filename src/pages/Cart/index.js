// Modules
import React from 'react'

//Assets
import OrderSummary from '../../components/cart/OrderSummary'
import ShoppingCard from '../../components/cart/ShoppingCard'

const Cart = () => {
  return (
    <div className="cart">
      <OrderSummary></OrderSummary>
      <section className="cart__shopping-cards">
        {/* Shoppping Cards would be rendered dynamically */}
        <ShoppingCard></ShoppingCard>
        <ShoppingCard></ShoppingCard>
      </section>
      <div className="cart__total-price">
        <span className="cart__total-price--text">Total Price</span>
        <span className="cart__total-price--price">$37.8</span>
      </div>
      <div className="cart__continue-checkout">
        <button>Continue to Checkout</button>
      </div>
    </div>
  )
}

export default Cart
