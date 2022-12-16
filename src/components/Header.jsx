// Modules
import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Utils
import { path } from '../constants'
import CartContext from '../contexts/CartContext/CartProvider'

// Assets
import menuBars from '../assets/Icon=menu-bars.png'
import logo from '../assets/logo.png'
import iconCart from '../assets/Icon=cart-menu.png'
import caretLeft from '../assets/icons/caret/Icon=circle-caret-left.png'

//Components
import Scoops from './Scoops'
import Menu from './Menu'

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalQty, displayCartAnimation } = useContext(CartContext)
  const [mousePos, setMousePos] = useState({})

  // We are taking cartIcon position and sending it to Scoops so that we can use it to determine how much it would need to translate in order to make the animation
  const [cartIconPos, setCartIconPos] = useState({})
  const cartIconRef = useRef()
  const getCartIconPosition = () => {
    const cartPosition = cartIconRef.current.getBoundingClientRect()
    setCartIconPos(cartPosition)
  }

  //Get mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  //After loading page, we want to know cartIcon position and add an event listener to the window that will update cart icon position when windows is resized
  useEffect(() => {
    getCartIconPosition()
    window.addEventListener('resize', getCartIconPosition)
  }, [])

  const isHeaderVertical =
    location.pathname === path.CHECKOUT || location.pathname === path.CART
      ? false
      : true

  useEffect(() => {
    console.log(`Menu is ${menuOpen ? 'open' : 'closed'}.`)
  }, [menuOpen])

  return (
    <>
      {isHeaderVertical && <div className="grid-placeholder"></div>}
      {location.pathname !== path.CHECKOUT && location.pathname !== path.CART && (
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
            <Link
              to={path.CART}
              className={`header__cart ${
                displayCartAnimation ? 'cart-animation' : undefined
              }`}
              ref={cartIconRef}>
              <div className="header__cart-bubble">
                <span className="header__cart-qty">{totalQty}</span>
              </div>
              <img src={iconCart} alt="Cart icon." />
            </Link>
            {displayCartAnimation && (
              <Scoops cartIconPosition={cartIconPos} mousePos={mousePos} />
            )}
            {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
          </div>
        </header>
      )}
      {location.pathname === path.CHECKOUT && (
        <header className="header-checkout">
          <div className="header-checkout__wrapper">
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
          </div>
        </header>
      )}
      {location.pathname === path.CART && (
        <header className="header-cart">
          <div className="header-cart__wrapper">
            <Link to={path.PRODUCTS}>
              <button className="header-cart__back-btn">
                <img src={caretLeft} />
                <span>Product List</span>
              </button>
            </Link>
            <span className="header-cart__title">Shopping Cart</span>
            <Link to={path.LANDING} className="header-cart__logo">
              <img src={logo} alt="Cream Colors logo." />
            </Link>
          </div>
        </header>
      )}
    </>
  )
}

export default Header
