import React from 'react'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext/CartProvider'

//Assets
import { ReactComponent as IconMinus } from '../../assets/icons/control/Icon=circle-minus.svg'
import { ReactComponent as IconPlus } from '../../assets/icons/control/Icon=circle-plus.svg'

const QuantitySelector = ({ id, quantity }) => {
  const { addQty, removeQty } = useContext(CartContext)
  return (
    <div className="quantity-selector">
      <span className="quantity-selector__txt">Quantity</span>
      <IconMinus onClick={() => removeQty(id)} />
      <div className="quantity-selector__qty-bg">
        <span className="quantity-selector__qty-txt">{quantity}</span>
      </div>
      <IconPlus onClick={() => addQty(id)} />
    </div>
  )
}

export default QuantitySelector
