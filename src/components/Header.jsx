import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//assets
import menuBars from '../assets/Icon=menu-bars.png'
import logo from '../assets/logo.png'
import iconCart from '../assets/Icon=cart-menu.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    console.log(`Menu is ${menuOpen ? 'open' : 'closed'}.`)
  }, [menuOpen])

  return (
    <header className="header">
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
  )
}

export default Header
