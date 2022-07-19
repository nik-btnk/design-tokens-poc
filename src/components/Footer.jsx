import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-contact">
          <span className="footer-contact__gmail">example@gmail.com</span>
          <span className="footer-contact__phone">+1 (999) 123-12-12</span>
        </div>
        <div className="footer-logo">
          <Link to="/">
            <img src={require('../assets/logo.png')} alt="" />
          </Link>
        </div>
        <div className="footer-social">
          <img
            className="footer-social__tiktok"
            src={require('../assets/cib_tiktok.png')}
            alt=""
          />
          <img src={require('../assets/carbon_logo-instagram.png')} alt="" />
        </div>
        <div className="footer-copy">
          <p>Design Token&apos;s Lonely Hearts Club Band &copy;2022</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
