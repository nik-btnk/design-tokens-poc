import React from 'react'

//Component that represents a checkbox list for filtering products by category (prrice, allergies, nutrition, category)
export const FilterControl = () => {
  const handleOnClick = () => {
    const checkList = document.querySelector('.filter-control-dropdown')
    const arrow = document.querySelector(
      '.filter-control-dropdown__anchor-arrow'
    )
    console.log(arrow)
    if (checkList.classList.contains('visible')) {
      checkList.classList.remove('visible')
      arrow.classList.remove('rotated')
    } else {
      checkList.classList.add('visible')
      arrow.classList.add('rotated')
    }
  }
  return (
    <div className="filter-control-dropdown">
      <button
        className="filter-control-dropdown__anchor"
        onClick={handleOnClick}>
        Allergies
        <img
          className="filter-control-dropdown__anchor-arrow"
          src={require('../../../src/assets/icons/caret/Icon=circle-caret-right.png')}
          alt=""
        />
      </button>
      <ul className="filter-control-dropdown__items">
        <li>
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <img
            src={require('../../assets/icons/health/Icon=allergy-milk.png')}
            alt=""
          />
          <span className="item-name">Milk</span>
        </li>
        <li>
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <img
            src={require('../../assets/icons/health/Icon=allergy-egg.png')}
            alt=""
          />
          <span className="item-name">Eggs</span>
        </li>
        <li>
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <img
            src={require('../../assets/icons/health/Icon=allergy-fish.png')}
            alt=""
          />
          <span className="item-name">Fish</span>
        </li>
        <li>
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <img
            src={require('../../assets/icons/health/Icon=allergy-nuts.png')}
            alt=""
          />
          <span className="item-name">Nuts</span>
        </li>
        <li>
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <img
            src={require('../../assets/icons/health/Icon=allergy-wheat.png')}
            alt=""
          />
          <span className="item-name">Wheat</span>
        </li>
      </ul>
    </div>
  )
}
