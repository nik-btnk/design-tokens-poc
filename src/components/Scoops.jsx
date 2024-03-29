// Modules
import React, { useState, useRef, useEffect, useContext } from 'react'

// Utils
import CartContext from '../contexts/CartContext/CartProvider'

// Assets
import { ReactComponent as IconScoops } from '../assets/Scoop-color.svg'

const Scoops = ({ cartIconPosition, mousePos }) => {
  const { total, displayCartAnimation } = useContext(CartContext)
  const scoopRef = useRef()
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  //Calculate new offset whenever mouse position changes
  useEffect(() => {
    let newOffsetX = cartIconPosition.x - mousePos.x + 20
    setOffsetX(newOffsetX)

    let newOffsetY = cartIconPosition.y - mousePos.y + 20
    setOffsetY(newOffsetY)
  }, [mousePos])

  //Add new values to scoops style when adding items to cart (when scoops is displayed) to set positioning and translate coordinates
  useEffect(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )

    if (displayCartAnimation) {
      if (vw < 1440) {
        scoopRef.current.style.cssText = `--translateX: ${offsetX}px;
        --translateY: ${offsetY}px;
        left:${mousePos.x - 20}px;
        top: ${mousePos.y - 20}px;`
      } else {
        scoopRef.current.style.cssText = `--translateX: ${offsetX}px;
        --translateY: ${offsetY}px;
        left:-${offsetX}px;
        top: ${mousePos.y - 20}px;`
      }
    }
  }, [total])

  return (
    <>
      <div className="scoops" ref={scoopRef}>
        <IconScoops />
      </div>
    </>
  )
}

export default Scoops
