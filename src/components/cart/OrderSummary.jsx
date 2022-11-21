import React from 'react'

//Assets
import iconArrow from '../../assets/icons/caret/Icon=circle-caret-right.png'

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <header>
        <span className="order-summary__title">Order Summary</span>
        {/* the source of the arrow should be rotated when opened */}
        <img className="order-summary__arrow" src={iconArrow} alt="" />
      </header>
      {/* This resume will toggle between folded and unfolded classes */}
      <div className="order-summary__resume folded">
        <div className="order-summary__products-price">
          <div className="order-summary__product">
            <span className="order-summary__product-name">
              Vivacious Violet
            </span>
            <span className="order-summary__product-qty">x2</span>
            <span className="order-summary__product-price">$5.98</span>
          </div>
          <div className="order-summary__line"></div>
        </div>
        <div className="order-summary__amount-tax">
          <div className="order-summary__amount">
            <span>Product Price</span>
            <span>$15.97</span>
          </div>
          <div className="order-summary__taxes">
            <span>Estimated taxes</span>
            <span>$9.00</span>
            <div className="order-summary__line"></div>
          </div>
        </div>
      </div>
      <div className="order-summary__total">
        <span>Estimated Total</span>
        <span className="order-summary__total-price">
          <b>$24.97</b>
        </span>
      </div>
      {/* also toggle class folded and unfolded */}
      <div className="cart__continue-checkout folded">
        <button>Continue to Checkout</button>
      </div>
    </div>
  )
}

export default OrderSummary
