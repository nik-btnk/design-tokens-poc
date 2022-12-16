import React from 'react'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext/CartProvider'

//Assets
import { ReactComponent as IconBin } from '../../assets/icons/control/icon-basket.svg'

const QuantitySelector = ({ id, quantity, setIsAdded, setBtnDisplay }) => {
  const { addQty, removeQty, removeProduct } = useContext(CartContext)
  const handleRemove = () => {
    removeProduct(id)
    setIsAdded(false)
    setBtnDisplay(false)
  }
  return (
    <div className="quantity-selector">
      <span className="quantity-selector__txt">Quantity</span>
      {quantity > 1 ? (
        <div className="icon-minus" onClick={() => removeQty(id)}></div>
      ) : (
        <IconBin onClick={handleRemove} className="quantity-selector__bin" />
      )}

      <div className="quantity-selector__qty-bg">
        <span className="quantity-selector__qty-txt">{quantity}</span>
      </div>
      <div className="icon-plus" onClick={() => addQty(id)}></div>
    </div>
  )
}

export default QuantitySelector
