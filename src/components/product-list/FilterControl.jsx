import React from 'react'
import generalData from '../../general-data'
import { PriceSlider } from './PriceSlider'

//Component that represents a checkbox list for filtering products by category (prrice, allergies, nutrition, category)
export const FilterControl = ({ type }) => {
  const filterName = type
  const handleOnClick = () => {
    const checkList = document.getElementById(`${filterName}-dropdown`)
    const arrow = document.getElementById(`${filterName}-arrow`)
    if (checkList.classList.contains('visible')) {
      checkList.classList.remove('visible')
      arrow.classList.remove('rotated')
    } else {
      checkList.classList.add('visible')
      arrow.classList.add('rotated')
    }
  }
  return (
    <div className="filter-control-dropdown" id={`${filterName}-dropdown`}>
      <button
        className="filter-control-dropdown__anchor"
        onClick={handleOnClick}>
        {filterName}
        <img
          className="filter-control-dropdown__anchor-arrow"
          id={`${filterName}-arrow`}
          src={require('../../../src/assets/icons/caret/Icon=circle-caret-right.png')}
          alt=""
        />
      </button>
      <ul className="filter-control-dropdown__items">
        {filterName !== 'Price' ? (
          generalData[type].map((item) => (
            <li key={item}>
              <label className="checkbox-container">
                <input type="checkbox" />
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
          <PriceSlider />
        )}
      </ul>
    </div>
  )
}
