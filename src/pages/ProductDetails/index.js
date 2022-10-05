// Modules
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Components
import HealthInformation from '../../components/product-details/HealthInformation'
import ProductInfo from '../../components/product-details/ProductInfo'
import MoreProducts from '../../components/product-details/MoreProducts'

// Utils
import products from '../../product-storage'
import { path } from '../../constants'

const ProductDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const productId = parseInt(location.pathname.split('/')[2])
  const selectedProduct = products.filter(
    (product) => product.id === productId
  )[0]

  useEffect(() => {
    if (!products.map((item) => item.id).includes(productId))
      navigate(path.NOTFOUND)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="product-details">
      {selectedProduct && (
        <>
          <ProductInfo product={selectedProduct} />
          <HealthInformation product={selectedProduct} />
          <MoreProducts product={selectedProduct} />
        </>
      )}
    </div>
  )
}

export default ProductDetails
