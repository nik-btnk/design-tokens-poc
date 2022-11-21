// Modules
import React from 'react'

//Assets
import OrderSummary from '../../components/cart/OrderSummary'
import ShoppingCard from '../../components/cart/ShoppingCard'

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__container">
        <section className="cart__order-summary">
          <OrderSummary></OrderSummary>
        </section>
        <section className="cart__shopping-cards">
          {/* Shoppping Cards would be rendered dynamically */}
          <ShoppingCard></ShoppingCard>
          <ShoppingCard></ShoppingCard>
        </section>
        <div
          className="cart__total-price"
          style={{ backgroundColor: 'lightcoral' }}>
          <span className="cart__total-price--text">Total Price</span>
          <span className="cart__total-price--price">$37.8</span>
        </div>
        <div className="cart__continue-checkout">
          <button>Continue to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
