import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext/CartProvider'
import QuantitySelector from './QuantitySelector'

// Assets
import { ReactComponent as IconCart } from '../../assets/Icon=cart-add.svg'
import { ReactComponent as IconCheck } from '../../assets/icons/status/Icon=check.svg'

const AddToCartBtn = ({ id }) => {
  const { addProduct, selectedProducts } = useContext(CartContext)
  const myProduct = selectedProducts.find((product) => product.id == id)
  const [isAdded, setIsAdded] = useState(myProduct?.quantity > 0)
  const [btnDisplay, setBtnDisplay] = useState(false)

  const handleAddToCart = () => {
    addProduct(id)
    setBtnDisplay((prev) => !prev)

    setTimeout(() => {
      setIsAdded(true)
    }, 1200)
  }

  return (
    <button
      className="add-to-cart-btn"
      onClick={!isAdded && !btnDisplay ? handleAddToCart : undefined}>
      {isAdded ? (
        <QuantitySelector
          id={id}
          quantity={myProduct?.quantity}
          setIsAdded={setIsAdded}
          setBtnDisplay={setBtnDisplay}
        />
      ) : (
        <>
          {btnDisplay ? (
            <div className="added">
              <IconCheck />
              <span>Added</span>
            </div>
          ) : (
            <>
              <IconCart />
              Add to Cart
            </>
          )}
        </>
      )}
    </button>
  )
}

export default AddToCartBtn
