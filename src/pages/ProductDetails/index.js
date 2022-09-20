// Modules
import React from 'react'

// Components
import HealthInformation from '../../components/product-details/HealthInformation'

// Utils
import products from '../../product-storage'

const ProductDetails = () => {
  const testProduct = products[2]

  return (
    <div className="product-details">
      <HealthInformation product={testProduct} />
    </div>
  )
}

export default ProductDetails
