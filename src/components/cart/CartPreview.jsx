// Modules
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// Utils
import { path } from '../../constants'
import CartContext from '../../contexts/CartContext/CartProvider'
import { useBrandedUrl } from '../../hooks/useBrandedUrl'

// Components
import ShoppingCard from './ShoppingCard'

const CartPreview = ({ setCartOpen, setMenuOpen }) => {
  const { selectedProducts, calcProductTotal, productsTotal } =
    useContext(CartContext)
  const cartUrl = useBrandedUrl(path.CART)

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
        <button
          onClick={() => {
            setCartOpen(false)
            setMenuOpen(false)
          }}>
          <Link to={cartUrl} style={{ textDecoration: 'none', color: 'black' }}>
            View Full Cart
          </Link>
        </button>
      </div>
    </div>
  )
}

export default CartPreview
