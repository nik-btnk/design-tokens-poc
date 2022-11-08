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
    </div>
  )
}

export default Playground
