//Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../constants'

//Assets
import iconCross from '../assets/icons/control/icon-x.png'
import CartPreview from './cart/CartPreview'
import { useState } from 'react'

const Menu = ({ setMenuOpen }) => {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <div className={`menu ${cartOpen && 'cart-open'}`}>
      <div className="menu__close">
        <div
          className="menu__close--container"
          onClick={() => {
            setMenuOpen(false)
          }}>
          <img src={iconCross} alt="" className="menu__close--cross" />
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
