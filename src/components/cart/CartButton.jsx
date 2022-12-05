import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext/CartProvider'
import QuantitySelector from './QuantitySelector'

//Assets
import { ReactComponent as IconCart } from '../../assets/Icon=cart-add.svg'
import { ReactComponent as IconCheck } from '../../assets/icons/status/Icon=check.svg'

const AddToCartBtn = ({ id }) => {
  const { addProduct, selectedProducts } = useContext(CartContext)
  const myProduct = selectedProducts.find((product) => product.id == id)
  const [isAdded, setIsAdded] = useState(myProduct?.quantity > 0)
  const [btnDisplay, setBtnDisplay] = useState(false)
  const handleClick = () => {
    addProduct(id)
    setBtnDisplay((prev) => !prev)

    setTimeout(() => {
      setIsAdded(true)
    }, 1200)
  }

  return (
    <>
      {isAdded ? (
        <button className="add-to-cart-btn">
          <QuantitySelector
            id={id}
            quantity={myProduct?.quantity}
            setIsAdded={setIsAdded}
            setBtnDisplay={setBtnDisplay}
          />
        </button>
      ) : (
        <>
          <button
            className="add-to-cart-btn added"
            style={btnDisplay ? { display: 'flex' } : { display: 'none' }}>
            <IconCheck />
            <span>Added</span>
          </button>

          <button
            className="add-to-cart-btn"
            onClick={handleClick}
            style={btnDisplay ? { display: 'none' } : { display: 'flex' }}>
            <IconCart />
            Add to Cart
          </button>
        </>
      )}
    </>
  )
}

export default AddToCartBtn
