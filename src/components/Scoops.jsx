import React from 'react'
import { useContext } from 'react'
import CartContext from '../contexts/CartContext/CartProvider'

//Assets
import iconScoops from '../assets/mascot-flipped.png'

const Scoops = () => {
  const { displayCartAnimation } = useContext(CartContext)
  return (
    <>
      {displayCartAnimation && (
        <div className="scoops">
          <img src={iconScoops} alt="" />
        </div>
      )}
    </>
  )
}

export default Scoops
