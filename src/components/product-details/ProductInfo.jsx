// Modules
import React from 'react'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext/CartProvider'

// Components
import ProductCard from '../product-list/ProductCard'

// Assets
import { ReactComponent as IconCart } from '../../assets/Icon=cart-add.svg'

const ProductInfo = ({
  product: { name, description, price, subtitle, id }
}) => {
  const { addProduct, removeProduct, isSelected } = useContext(CartContext)

  return (
    <div className="product-info">
      <div className="product-info__content-wrapper">
        <span className="product-info__title-mobile">{subtitle}</span>
        <ProductCard
          showInfo={false}
          showTextWrap={true}
          name={name}
          price={price}
          id={id}
        />
        <div className="product-info__content">
          <span className="product-info__content--title">{subtitle}</span>
          <span className="product-info__content--description">
            {description}
          </span>
          <span className="product-info__content--price">{`$${price.toFixed(
            2
          )}`}</span>
          {isSelected(id) ? (
            <button
              className="product-info__content--cta"
              onClick={() => removeProduct(id)}>
              <IconCart />
              Remove
            </button>
          ) : (
            <button
              className="product-info__content--cta"
              onClick={() => addProduct(id)}>
              <IconCart />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
