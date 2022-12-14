//Modules
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../contexts/CartContext/CartProvider'
import ShoppingCard from './ShoppingCard'
import { path } from '../../constants'

const CartPreview = () => {
  const { selectedProducts, calcProductTotal, productsTotal } =
    useContext(CartContext)
  return (
    <div className="cart-preview">
      <h4 className="cart-preview__text">Cart Preview</h4>
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
      <div className="order-summary__line"></div>
      <div className="cart__total-price">
        <span className="cart__total-price--text">Total Price</span>
        <span className="cart__total-price--price">
          ${productsTotal.toFixed(2)}
        </span>
      </div>
      <div className="cart__continue-checkout">
        <button>
          <Link
            to={path.CART}
            style={{ textDecoration: 'none', color: 'black' }}>
            View Full Cart
          </Link>
        </button>
      </div>
    </div>
  )
}

export default CartPreview
