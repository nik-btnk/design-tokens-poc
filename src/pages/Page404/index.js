// Modules
import React from 'react'

// Assets
import mascot from '../../assets/404-mascot.png'

const Page404 = () => {
  return (
    <div className="not-found-wrapper">
      <div className="not-found">
        <div className="not-found__logo">
          <span>4</span>
          <img src={mascot}></img>
          <span>4</span>
        </div>
        <span className="not-found__text1">
          Sorry, we couldn’t find the page you’re looking for!
        </span>
        <span className="not-found__text2">
          Maybe spin the Wheel O’ Color and find a new favorite?
        </span>
      </div>
    </div>
  )
}

export default Page404
