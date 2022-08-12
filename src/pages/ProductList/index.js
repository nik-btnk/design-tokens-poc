import React, { useState } from 'react'
import ActiveFilter from '../../components/product-list/ActiveFilter'
import { Filters } from '../../components/product-list/Filters'
import ProductCard from '../../components/product-list/ProductCard'

const Storefront = () => {
  const min = 0
  const max = 10
  const [priceRange, setPriceRange] = useState([min, max])
  const [selected, setSelected] = useState([])

  const removeFilter = (filter) => {
    setSelected((old) => old.filter((i) => i !== filter))
  }

  const removeAll = () => {
    setSelected([])
  }

  return (
    <div className="product-list">
      <div className="product-list-container">
        <Filters
          min={min}
          max={max}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="active-filters-container">
          <h4 className="active-filters-container__title">Active Filters:</h4>
          <ActiveFilter priceRange={priceRange} type="Price" />
          {selected.map((filterName, index) => (
            <ActiveFilter
              key={index}
              removeFilter={removeFilter}
              type={filterName}
            />
          ))}
          {selected.length > 0 ? (
            <ActiveFilter removeAll={removeAll} type="Remove" />
          ) : (
            <span
              style={{
                marginLeft: '10px',
                marginTop: '2px',
                fontSize: '12px'
              }}>
              No filters selected
            </span>
          )}
        </div>
        <div className="product-cards-container">
          <ProductCard name={'Pink Panter'} price={2.99} />
        </div>
      </div>
    </div>
  )
}

export default Storefront
