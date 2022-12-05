// Modules
import React from 'react'

// Components
import ProductCard from '../product-list/ProductCard'
import CartButton from '../cart/CartButton'

const ProductInfo = ({
  product: { name, description, price, subtitle, id }
}) => {
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
          <div className="product-info__content--cta">
            <CartButton id={id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
