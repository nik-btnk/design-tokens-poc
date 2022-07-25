import React from 'react'

/* const btnTypes = ['pink', 'blue', 'green', 'orange']
 */
const Button = ({ type }) => {
  return <button className={`button button-${type}`}>Button {type}</button>
}

export default Button
