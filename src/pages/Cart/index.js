// Modules
import React, { useEffect } from 'react'
import CartContext from '../../contexts/CartContext/CartProvider.js'
import { useContext } from 'react'

//Assets
import OrderSummary from '../../components/cart/OrderSummary'
import ShoppingCard from '../../components/cart/ShoppingCard'

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const { selectedProducts, calcProductTotal, productsTotal } =
    useContext(CartContext)

  const currency = localStorage.getItem('currency') || 'hryvnia'

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <OrderSummary></OrderSummary>
        <section className="cart__shopping-cards">
          {/* Shoppping Cards would be rendered dynamically */}
          {selectedProducts.length > 0 ? (
            selectedProducts.map((product) => (
              <ShoppingCard
                product={product}
                key={product.id}
                productTotal={calcProductTotal(product.id)}
              />
            ))
          ) : (
            <h2 style={{ textAlign: 'center' }}>No products on cart</h2>
          )}
        </section>
        <div className="cart__total-price">
          <span className="cart__total-price--text">Total Price</span>
          <span className="cart__total-price--price">
            {currency === 'usd' && '$'}
            {productsTotal.toFixed(2)}
            {currency === 'hryvnia' && '₴'}
          </span>
        </div>
        <div className="cart__continue-checkout">
          <button>Continue to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
