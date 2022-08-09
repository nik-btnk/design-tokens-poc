import React from 'react'

/* const btnTypes = ['pink', 'blue', 'green', 'orange']
 */
const Button = ({ type, text }) => {
  return <button className={`button button-${type}`}>{text}</button>
}

export default Button
