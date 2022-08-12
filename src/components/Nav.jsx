import React from 'react'
import { Link } from 'react-router-dom'

//assets
import menuBars from '../assets/Icon=menu-bars.png'
import logo from '../assets/logo.png'
import iconCart from '../assets/Icon=cart-menu.png'

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <div className="nav-menu-icon">
          <img src={menuBars} alt="" />
        </div>
        <div className="nav-brand-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="nav-cart-logo">
          <Link to="/cart">
            <img src={iconCart} alt="" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
