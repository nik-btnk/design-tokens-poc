// Modules
import React, { useContext } from 'react'

// Utils
import CartContext from '../../contexts/CartContext/CartProvider'

// Assets
import { ReactComponent as IconMinus } from '../../assets/icons/control/Icon=circle-minus.svg'
import { ReactComponent as IconPlus } from '../../assets/icons/control/Icon=circle-plus.svg'
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
        <IconMinus
          onClick={() => removeQty(id)}
          className="quantity-selector__remove-qty"
        />
      ) : (
        <IconBin onClick={handleRemove} className="quantity-selector__bin" />
      )}

      <div className="quantity-selector__qty-bg">
        <span className="quantity-selector__qty-txt">{quantity}</span>
      </div>
      <IconPlus
        onClick={() => addQty(id)}
        className="quantity-selector__add-qty"
      />
    </div>
  )
}

export default QuantitySelector
