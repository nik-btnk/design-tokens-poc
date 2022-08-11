import React, { useState } from 'react'
import { FilterControl } from './FilterControl'
//Filters menu
export const Filters = ({
  min,
  max,
  priceRange,
  setPriceRange,
  selected,
  setSelected
}) => {
  const [isArrowActive, setArrowActive] = useState(false)

  const handleOnClick = () => {
    setArrowActive((previousState) => !previousState)
  }
  return (
    <>
      <div className="filters">
        <h4>Filters:</h4>
        <div className="filters-container">
          <FilterControl
            type="Price"
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <FilterControl
            type="Allergies"
            selected={selected}
            setSelected={setSelected}
          />
          <FilterControl
            type="Nutrition"
            selected={selected}
            setSelected={setSelected}
          />
          <FilterControl
            type="Category"
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div
          className={`filters-container-mobile ${
            isArrowActive ? 'visible' : 'hide'
          }`}>
          <FilterControl
            type="Price"
            min={min}
            max={max}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <FilterControl
            type="Allergies"
            selected={selected}
            setSelected={setSelected}
          />
          <FilterControl
            type="Nutrition"
            selected={selected}
            setSelected={setSelected}
          />
          <FilterControl
            type="Category"
            selected={selected}
            setSelected={setSelected}
          />
          <div className="apply-filters">
            <button
              id="apply-filters-btn"
              className="button-blue"
              onClick={handleOnClick}>
              Apply Filters
            </button>
          </div>
        </div>
        <div
          className="mobile-arrow"
          onClick={handleOnClick}
          style={
            isArrowActive
              ? { transform: 'rotate(90deg)' }
              : { transform: 'initial' }
          }>
          <img
            src={require('../../../src/assets/icons/caret/Icon=circle-caret-right.png')}
            alt=""
          />
        </div>
        <div className="mobile-divider"></div>
      </div>
    </>
  )
}
