import React, { useState } from 'react'
import { useContext } from 'react'

//Assets
import { ReactComponent as IconCart } from '../../assets/Icon=cart-add.svg'
import { ReactComponent as IconCheck } from '../../assets/icons/status/Icon=check.svg'
import CartContext from '../../contexts/CartContext/CartProvider'
import QuantitySelector from './QuantitySelector'

const AddToCartBtn = ({ id }) => {
  const { addProduct, isAdded, selectedProducts } = useContext(CartContext)
  const { isAddedVisible, setIsAddedVisible } = useState(true)
  const myProduct = selectedProducts.find((product) => product.id == id)
  const handleClick = () => {
    addProduct(id)
    if (5 < selectedProducts.length + 6) setIsAddedVisible(true)
  }

  return (
    <>
      {isAddedVisible ? (
        <button className="add-to-cart-btn">
          <IconCheck />
          Added
        </button>
      ) : isAdded(id) ? (
        <button className="add-to-cart-btn">
          <QuantitySelector id={id} quantity={myProduct.quantity} />
        </button>
      ) : (
        <button className="add-to-cart-btn" onClick={handleClick}>
          <IconCart />
          Add to Cart
        </button>
      )}
    </>
  )
}

export default AddToCartBtn
