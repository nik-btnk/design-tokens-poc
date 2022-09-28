// Modules
import React, { useState } from 'react'

// Components
import HealthInformation from '../../components/product-details/HealthInformation'
import ProductInfo from '../../components/product-details/ProductInfo'
import MoreProducts from '../../components/product-details/MoreProducts'

// Utils
import products from '../../product-storage'

const ProductDetails = () => {
  const [testProductIndex, setTestProductIndex] = useState(0)
  // This will need to be redone. Each product will need to be assigned a unique ID. ID of
  // the product will be obtained from URL, and the relevant product will be fetched from store.

  return (
    <div className="product-details">
      <div
        className="controls"
        style={{ textAlign: 'center', fontSize: '24px', fontWeight: '600' }}>
        <span>Temporary Product Switch Controls</span>
        <div>
          <button
            disabled={testProductIndex === 0 ? true : false}
            onClick={() => setTestProductIndex((prev) => prev - 1)}>
            Previous
          </button>
          <button
            disabled={testProductIndex === products.length - 1 ? true : false}
            onClick={() => setTestProductIndex((prev) => prev + 1)}>
            Next
          </button>
        </div>
      </div>
      <ProductInfo product={products[testProductIndex]} />
      <HealthInformation product={products[testProductIndex]} />
      <MoreProducts product={products[testProductIndex]} />
    </div>
  )
}

export default ProductDetails
