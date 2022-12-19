// Modules
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// Utils
import { path } from '../constants'
import useOutsideAlerter from '../hooks/useOutsideAlerter'

//Assets
import CartPreview from './cart/CartPreview'

const Menu = ({ setMenuOpen }) => {
  const [cartOpen, setCartOpen] = useState(false)
  const menuRef = useRef(null)
  useOutsideAlerter(menuRef, setMenuOpen)

  return (
    <div className={`menu ${cartOpen && 'cart-open'}`} ref={menuRef}>
      <div className="menu__close">
        <div
          className="menu__close--container"
          onClick={() => {
            setMenuOpen(false)
          }}>
          <div className="icon-cross menu__close--cross"></div>
          <span className="menu__close--text">Close menu</span>
        </div>
      </div>

      {cartOpen ? (
        <CartPreview />
      ) : (
        <ul className="menu__options">
          <Link
            to={path.LANDING}
            onClick={() => {
              setMenuOpen(false)
            }}>
            <li className="menu__options--home">Home</li>
          </Link>
          <Link
            to={path.PRODUCTS}
            onClick={() => {
              setMenuOpen(false)
            }}>
            <li className="menu__options--catalog">Flavor Catalog</li>
          </Link>

          <li
            className="menu__options--cart"
            onClick={() => {
              setCartOpen(true)
            }}>
            Shopping Cart
          </li>
        </ul>
      )}
    </div>
  )
}

export default Menu
