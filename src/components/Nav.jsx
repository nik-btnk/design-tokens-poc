import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-brand-logo">
          <Link to="/">
            <img src={require('../assets/logo.png')} alt="" />
          </Link>
        </div>

        <div className="nav-cart-logo">
          <Link to="/cart">
            <img src={require('../assets/Icon=cart-menu.png')} alt="" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
