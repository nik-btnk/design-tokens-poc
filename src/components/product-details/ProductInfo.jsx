// Modules
import React from 'react'

// Components
import ProductCard from '../product-list/ProductCard'

// Assets
import iconCart from '../../assets/Icon=cart-add.png'

const ProductInfo = ({ product: { name, description, price } }) => {
  console.log(description)

  return (
    <div className="product-info">
      <ProductCard showInfo={false} name={name} price={price} />
      <button className="product-info__cta">
        <img src={iconCart} alt={`${name} ice cream.`} />
        Add to Cart
      </button>
      <span className="product-info__description">{description}</span>
    </div>
  )
}

export default ProductInfo
