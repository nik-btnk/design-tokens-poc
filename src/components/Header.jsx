// Modules
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Assets
import menuBars from '../assets/Icon=menu-bars.png'
import logo from '../assets/logo.png'
import iconCart from '../assets/Icon=cart-menu.png'
import caretLeft from '../assets/icons/caret/Icon=circle-caret-left.png'
import { path } from '../constants'

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isHeaderVertical = location.pathname === path.CHECKOUT ? false : true

  useEffect(() => {
    console.log(`Menu is ${menuOpen ? 'open' : 'closed'}.`)
  }, [menuOpen])

  return (
    <>
      {isHeaderVertical && <div className="grid-placeholder"></div>}
      {location.pathname !== path.CHECKOUT ? (
        <header className={`header${isHeaderVertical ? '--vertical' : ''}`}>
          <div className="header__wrapper">
            <button
              className="header__menu-button"
              onClick={() => setMenuOpen((prev) => !prev)}>
              <img src={menuBars} alt="Menu icon." />
              <span>Menu</span>
            </button>
            <Link to={path.LANDING} className="header__logo">
              <img src={logo} alt="Cream Colors logo." />
            </Link>
            <Link to={path.CART} className="header__cart">
              <img src={iconCart} alt="Cart icon." />
            </Link>
          </div>
        </header>
      ) : (
        <header className="header-checkout">
          <Link to={path.CART}>
            <button className="header-checkout__back-btn">
              <img src={caretLeft} />
              <span>Back to Cart</span>
            </button>
          </Link>
          <span className="header-checkout__title">Checkout</span>
          <Link to={path.LANDING} className="header-checkout__logo">
            <img src={logo} alt="Cream Colors logo." />
          </Link>
        </header>
      )}
    </>
  )
}

export default Header
