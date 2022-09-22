// Modules
import React from 'react'

// Components
import ProductCard from '../product-list/ProductCard'

// Assets
import iconCart from '../../assets/Icon=cart-add.png'

const ProductInfo = ({ product: { name, description, price } }) => {
  return (
    <div className="product-info">
      <div className="product-info__content-wrapper">
        <span className="product-info__title">Some Sort of Title</span>
        <ProductCard showInfo={false} name={name} price={price} />
        <span className="product-info__price">{`$${price}`}</span>
        <button className="product-info__cta">
          <img src={iconCart} alt={`${name} ice cream.`} />
          Add to Cart
        </button>
        <span className="product-info__description">{description}</span>
      </div>
    </div>
  )
}

export default ProductInfo
