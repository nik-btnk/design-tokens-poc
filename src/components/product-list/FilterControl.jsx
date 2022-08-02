import React, { useState } from 'react'
import generalData from '../../general-data'
import { PriceSlider } from './PriceSlider'

export const FilterControl = ({
  type,
  selected,
  setSelected,
  priceRange,
  setPriceRange
}) => {
  const filterName = type
  const [isActive, setIsActive] = useState(false)
  const handleCheck = (event) => {
    let updatedList = [...selected]
    if (event.target.checked) {
      updatedList = [...selected, event.target.value]
    } else {
      updatedList.splice(selected.indexOf(event.target.value), 1)
    }
    setSelected(updatedList)
  }
  return (
    <div className="filter-dropdown">
      <button
        className="filter-dropdown-btn"
        onClick={() => setIsActive(!isActive)}>
        {filterName}
        <img
          className={
            isActive
              ? 'filter-dropdown-btn__arrow rotated'
              : 'filter-dropdown-btn__arrow'
          }
          src={require('../../../src/assets/icons/caret/Icon=circle-caret-right.png')}
          alt=""
        />
      </button>
      {isActive && (
        <ul className="filter-dropdown-items">
          {filterName !== 'Price' ? (
            generalData[type].map((item, index) => (
              <li key={index}>
                <label className="checkbox-container">
                  <input type="checkbox" value={item} onChange={handleCheck} />
                  <span className="checkmark"></span>
                </label>
                <img
                  src={require(`../../assets/icons/descriptive/icon-${item}.png`)}
                  alt=""
                />
                <span className="item-name">{item}</span>
              </li>
            ))
          ) : (
            <PriceSlider
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          )}
        </ul>
      )}
    </div>
  )
}
