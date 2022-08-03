import React, { useRef, useState } from 'react'
import generalData from '../../general-data'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
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

  //This function updates our "selected" list by adding or removing items to it
  const handleCheck = (event) => {
    let updatedList = [...selected]
    if (event.target.checked) {
      updatedList = [...selected, event.target.value]
    } else {
      updatedList.splice(selected.indexOf(event.target.value), 1)
    }
    setSelected(updatedList)
  }

  //The following two lines are used to tell react if we clicked outside the component and desactivate it if thats the case
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setIsActive)

  return (
    <div className="filter-dropdown" ref={wrapperRef}>
      <button
        className={`filter-dropdown-btn size-${filterName.toLowerCase()}`}
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
        <ul
          className={`filter-dropdown-items size-${filterName.toLowerCase()}`}>
          {filterName !== 'Price' ? (
            generalData[type].map((item, index) => (
              <li key={index}>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCheck}
                    checked={selected.includes(item) ? true : false}
                  />
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
