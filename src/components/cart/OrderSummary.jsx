// Modules
import React, { useState, useContext } from 'react'

// Utils
import CartContext from '../../contexts/CartContext/CartProvider.js'

// Assets
import iconArrow from '../../assets/icons/caret/Icon=circle-caret-right.png'

const OrderSummary = () => {
  const [isFolded, setIsFolded] = useState(true)
  const { selectedProducts, calcProductTotal, productsTotal, taxes, total } =
    useContext(CartContext)
  const currency = localStorage.getItem('currency') || 'hryvnia'

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
          {selectedProducts.map((product) => (
            <div key={product.id} className="order-summary__product">
              <span className="order-summary__product-name">
                {product.name}
              </span>
              <span className="order-summary__product-qty">
                x{product.quantity}
              </span>
              <span className="order-summary__product-price">
                {currency === 'usd' && '$'}
                {calcProductTotal(product.id).toFixed(2)}
                {currency === 'hryvnia' && '₴'}
              </span>
            </div>
          ))}
        </div>

        <div className="order-summary__line"></div>

        <div className="order-summary__amount-tax">
          <div className="order-summary__amount">
            <span>Product Price</span>
            <span>
              {currency === 'usd' && '$'}
              {productsTotal.toFixed(2)}
              {currency === 'hryvnia' && '₴'}
            </span>
          </div>
          <div className="order-summary__taxes">
            <span>Estimated taxes</span>
            <span>
              {currency === 'usd' && '$'}
              {taxes.toFixed(2)}
              {currency === 'hryvnia' && '₴'}
            </span>
          </div>
        </div>

        <div className="order-summary__line"></div>
      </div>
      <div className="order-summary__total">
        <span className="order-summary__total-text">Estimated Total</span>
        <span className="order-summary__total-price">
          {currency === 'usd' && '$'}
          {total.toFixed(2)}
          {currency === 'hryvnia' && '₴'}
        </span>
      </div>

      <div className={`cart__continue-checkout ${isFolded ? 'folded' : ''}`}>
        <button>Continue to Checkout</button>
      </div>
    </div>
  )
}

export default OrderSummary
