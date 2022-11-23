import React from 'react'
import { useState } from 'react'

//Assets
import iconArrow from '../../assets/icons/caret/Icon=circle-caret-right.png'

const OrderSummary = () => {
  const [isFolded, setIsFolded] = useState(true)

  return (
    <div className="order-summary">
      <header
        className="order-summary__header"
        onClick={() => {
          setIsFolded((prev) => !prev)
        }}>
        <span className="order-summary__title">Order Summary</span>
        <img
          className="order-summary__arrow"
          src={iconArrow}
          alt=""
          style={
            isFolded ? { transform: 'initial' } : { transform: 'rotate(90deg)' }
          }
        />
      </header>
      <div className={`order-summary__resume ${isFolded ? 'folded' : ''}`}>
        <div className="order-summary__products-price">
          <div className="order-summary__product">
            <span className="order-summary__product-name">
              Vivacious Violet
            </span>
            <span className="order-summary__product-qty">x2</span>
            <span className="order-summary__product-price">$5.98</span>
          </div>
          <div className="order-summary__product">
            <span className="order-summary__product-name">
              Vivacious Violet
            </span>
            <span className="order-summary__product-qty">x2</span>
            <span className="order-summary__product-price">$5.98</span>
          </div>
        </div>

        <div className="order-summary__line"></div>

        <div className="order-summary__amount-tax">
          <div className="order-summary__amount">
            <span>Product Price</span>
            <span>$15.97</span>
          </div>
          <div className="order-summary__taxes">
            <span>Estimated taxes</span>
            <span>$9.00</span>
          </div>
        </div>

        <div className="order-summary__line"></div>
      </div>
      <div className="order-summary__total">
        <span className="order-summary__total-text">Estimated Total</span>
        <span className="order-summary__total-price">$24.97</span>
      </div>

      <div className={`cart__continue-checkout ${isFolded ? 'folded' : ''}`}>
        <button>Continue to Checkout</button>
      </div>
    </div>
  )
}

export default OrderSummary
