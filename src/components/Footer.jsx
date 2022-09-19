import React from 'react'
import { Link } from 'react-router-dom'

//assets
import mascot from '../assets/mascot.png'
import iconTikTok from '../assets/cib_tiktok.png'
import iconIg from '../assets/carbon_logo-instagram.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact-container">
        <span className="footer__gmail">example@gmail.com</span>
        <span className="footer__phone">+1 (999) 123-12-12</span>
      </div>
      <div className="footer__logo">
        <Link to="/">
          <img src={mascot} alt="" />
        </Link>
      </div>
      <div className="footer__social-container">
        <img className="footer__tiktok" src={iconTikTok} alt="" />
        <img className="footer__instagram" src={iconIg} alt="" />
      </div>
      <div className="footer__copy">
        <p>Design Token&apos;s Lonely Hearts Club Band &copy;2022</p>
      </div>
    </footer>
  )
}

export default Footer
