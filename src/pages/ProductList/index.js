import React from 'react'
import ActiveFilter from '../../components/product-list/ActiveFilter'
import { Filters } from '../../components/product-list/Filters'

const Storefront = () => {
  return (
    <div className="product-list">
      <div className="product-list-container">
        <Filters />
        <div className="active-filters-container">
          <h4 className="active-filters-container__title">Active Filters:</h4>
          <ActiveFilter type="Nuts" />
          <ActiveFilter type="Milk" />
          <ActiveFilter type="High Protein" />
          <ActiveFilter type="Low Fat" />
          <ActiveFilter type="No Sugar" />
          <ActiveFilter type="Eggs" />
          <ActiveFilter type="Remove" />
        </div>
      </div>
    </div>
  )
}

export default Storefront
