// Modules
import React from 'react'

// Components
import HealthInformation from '../../components/product-details/HealthInformation'
import ProductInfo from '../../components/product-details/ProductInfo'

// Utils
import products from '../../product-storage'

const ProductDetails = () => {
  const testProduct = products[2]
  // This will need to be redone. Each product will need to be assigned a unique ID. ID of
  // the product will be obtained from URL, and the relevant product will be fetched from store.

  return (
    <div className="product-details">
      <ProductInfo product={testProduct} />
      <HealthInformation product={testProduct} />
    </div>
  )
}

export default ProductDetails
