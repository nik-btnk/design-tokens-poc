import React from 'react'
import { useContext } from 'react'
import CartContext from '../contexts/CartContext/CartProvider'

//Assets
import iconScoops from '../assets/mascot-flipped.png'

const Scoops = () => {
  const { displayScoops } = useContext(CartContext)
  return (
    <>
      {displayScoops && (
        <div className="scoops">
          <img src={iconScoops} alt="" />
        </div>
      )}
    </>
  )
}

export default Scoops
