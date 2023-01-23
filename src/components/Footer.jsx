// Modules
import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import mascot from '../assets/mascot.png'
import iconTikTok from '../assets/cib_tiktok.png'
import iconIg from '../assets/carbon_logo-instagram.png'

// Utils
import { useBrandedUrl } from '../hooks/useBrandedUrl'
import { path } from '../constants'

const Footer = () => {
  const landingUrl = useBrandedUrl(path.LANDING)

  return (
    <footer className="footer">
      <div className="footer__contact">
        <span className="footer__contact--email">scoop@creamcolors.com</span>
        <span className="footer__contact--phone">+1 (999) 123-1212</span>
      </div>
      <div className="footer__logo">
        <Link to={landingUrl}>
          <img src={mascot} alt="Cream Colors Logo." />
        </Link>
      </div>
      <div className="footer__social">
        <img
          className="footer__social--tiktok"
          src={iconTikTok}
          alt="TikTok link icon."
        />
        <img
          className="footer__social--instagram"
          src={iconIg}
          alt="Instagram link icon."
        />
      </div>
    </footer>
  )
}

export default Footer
