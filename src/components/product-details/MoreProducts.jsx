// Modules
import React from 'react'

// Components
import ProductCard from '../product-list/ProductCard'

// Utils
import products from '../../product-storage'

const MoreProducts = ({ product: { name } }) => {
  const indexArray = []
  while (indexArray.length < 4) {
    const r = Math.floor(Math.random() * products.length)
    if (indexArray.indexOf(r) === -1 && name !== products[r].name)
      indexArray.push(r)
  }

  return (
    <div className="more-products">
      <span className="more-products__title">More Adventure</span>
      <div className="more-products__container">
        {indexArray.map((itemIndex) => {
          return (
            <ProductCard
              key={products[itemIndex].name}
              showInfo={true}
              name={products[itemIndex].name}
              price={products[itemIndex].price}
              nutrition={products[itemIndex].nutrition}
              allergy={products[itemIndex].allergy}
              id={products[itemIndex].id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MoreProducts
