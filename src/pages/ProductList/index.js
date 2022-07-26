import React from 'react'
import { Filters } from '../../components/product-list/Filters'

const Storefront = () => {
  return (
    <div className="productList">
      <span className="productList__title">Product List</span>
      <Filters />
    </div>
  )
}

export default Storefront
