import React, { useState } from 'react'
import { FilterControl } from './FilterControl'
//Filters menu
export const Filters = () => {
  const min = 0
  const max = 10
  const [selected, setSelected] = useState([])
  const [priceRange, setPriceRange] = useState([min, max])
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
      <br></br>
      <div className="active-test">
        Selected Filters:
        {selected.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        Price Range: From ${priceRange[0]} to ${priceRange[1]} <br></br>
        Note: I couldn&apos;t figure out how to build a double-ranged filter for
        the price yet
      </div>
    </>
  )
}
