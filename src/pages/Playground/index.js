import React, { useState } from 'react'

const Playground = () => {
  const [theme, setTheme] = useState('light-theme')

  return (
    <div className={`playground ${theme}`}>
      <button
        onClick={() => {
          if (theme === 'light-theme') {
            setTheme('dark-theme')
          } else {
            setTheme('light-theme')
          }
        }}>
        Toggle Theme
      </button>

      <div className="playground__content">
        <h1 className="playground__content--title">PAGE CONTENT</h1>
        <p className="playground__content--article">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default Playground
