// Modules
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Assets
import menuBars from '../assets/Icon=menu-bars.png'
import logo from '../assets/logo.png'
import iconCart from '../assets/Icon=cart-menu.png'

const Header = ({ isVertical }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    console.log(`Menu is ${menuOpen ? 'open' : 'closed'}.`)
  }, [menuOpen])

  return (
    <>
      {isVertical && <div className="grid-placeholder"></div>}
      <header className={`header${isVertical ? '--vertical' : ''}`}>
        <div className="header__wrapper">
          <button
            className="header__menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}>
            <img src={menuBars} alt="Menu icon." />
            <span>Menu</span>
          </button>
          <Link to="/" className="header__logo">
            <img src={logo} alt="Cream Colors logo." />
          </Link>
          <Link to="/cart" className="header__cart">
            <img src={iconCart} alt="Cart icon." />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
