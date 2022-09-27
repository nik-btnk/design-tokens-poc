// Modules
import React from 'react'

// Components
import ProductCard from '../product-list/ProductCard'

// Assets
import { ReactComponent as IconCart } from '../../assets/Icon=cart-add.svg'

const ProductInfo = ({ product: { name, description, price } }) => {
  return (
    <div className="product-info">
      <div className="product-info__content-wrapper">
        <span className="product-info__title-mobile">Some Sort of Title</span>
        <ProductCard
          showInfo={false}
          showTextWrap={true}
          name={name}
          price={price}
        />
        <div className="product-info__content">
          <span className="product-info__content--title">
            Some Sort of Title
          </span>
          <span className="product-info__content--description">
            {description}
          </span>
          <span className="product-info__content--price">{`$${price.toFixed(
            2
          )}`}</span>
          <button className="product-info__content--cta">
            <IconCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
