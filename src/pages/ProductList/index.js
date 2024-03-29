import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ActiveFilter from '../../components/product-list/ActiveFilter'
import { Filters } from '../../components/product-list/Filters'
import ProductCard from '../../components/product-list/ProductCard'
import products from '../../product-storage'
import { filterProduct } from './filterProduct'

const Storefront = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const min = 0
  const max = 80
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
              className="active-filters-container__no-filters"
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
          {products
            .filter((product) => filterProduct(product, selected, priceRange))
            .map((iceCream, index) => (
              <ProductCard
                pic={`../../assets/ice-creams/pic-${iceCream.name}.png`}
                key={index}
                name={iceCream.name}
                price={iceCream.price}
                nutrition={iceCream.nutrition}
                allergy={iceCream.allergy}
                category={iceCream.category}
                id={iceCream.id}
                colorClassName={
                  index % 4 === 0
                    ? 'color-blue'
                    : index % 3 === 0 || index === 1
                    ? 'color-pink'
                    : 'color-green'
                }
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Storefront
