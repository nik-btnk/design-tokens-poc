import React from 'react'
import { useState } from 'react'
import CartContext from '../../contexts/CartContext/CartProvider.js'
import { useContext } from 'react'

//Assets
import iconArrow from '../../assets/icons/caret/Icon=circle-caret-right.png'

const OrderSummary = () => {
  const [isFolded, setIsFolded] = useState(true)
  const { selectedProducts, calcProductTotal, productsTotal, taxes, total } =
    useContext(CartContext)

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
                ${calcProductTotal(product.id).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="order-summary__line"></div>

        <div className="order-summary__amount-tax">
          <div className="order-summary__amount">
            <span>Product Price</span>
            <span>${productsTotal.toFixed(2)}</span>
          </div>
          <div className="order-summary__taxes">
            <span>Estimated taxes</span>
            <span>${taxes.toFixed(2)}</span>
          </div>
        </div>

        <div className="order-summary__line"></div>
      </div>
      <div className="order-summary__total">
        <span className="order-summary__total-text">Estimated Total</span>
        <span className="order-summary__total-price">${total.toFixed(2)}</span>
      </div>

      <div className={`cart__continue-checkout ${isFolded ? 'folded' : ''}`}>
        <button>Continue to Checkout</button>
      </div>
    </div>
  )
}

export default OrderSummary
