import React from 'react'

const Page404 = () => {
  return (
    <div className="not-found-wrapper">
      <div className="not-found">
        <div className="not-found__logo">
          <span>4</span>
          <img src={require('../../assets/404-mascot.png')}></img>
          <span>4</span>
        </div>
        <div className="not-found__text1">
          <p>
            Sorry, we couldn’t find the <br></br>page you’re looking for!
          </p>
        </div>
        <div className="not-found__text2">
          <p>
            <b>Maybe spin the Wheel O’ Color and find a new favorite?</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page404
