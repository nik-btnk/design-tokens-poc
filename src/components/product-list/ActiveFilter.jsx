import React from 'react'
import generalData from '../../general-data'

const ActiveFilters = ({ priceRange, removeAll, removeFilter, type }) => {
  const filterName = type
  return (
    <>
      {filterName !== 'Remove' && filterName !== 'Price' ? (
        <div className="active-filter">
          <img
            src={require(`../../assets/icons/descriptive/icon-${filterName}.png`)}
            alt=""
            className="active-filter__icon"
          />

          {generalData.Allergies.find((item) => item === filterName) ? (
            <>
              <img
                src={require('../../assets/icons/descriptive/icon-Allergy.png')}
                alt=""
                className="active-filter__prohibition"
              />
              <span>No {filterName}</span>
            </>
          ) : (
            <span>{filterName}</span>
          )}
          <div className="active-filter__spacer"></div>
          <img
            src={require('../../assets/icons/control/icon-x.png')}
            alt=""
            className="active-filter__cross"
            onClick={() => {
              removeFilter(filterName)
            }}
          />
        </div>
      ) : filterName === 'Price' ? (
        <div className="active-filter">
          <span>
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
      ) : (
        <div className="active-filter">
          <span>{filterName} All</span>
          <div className="active-filter__spacer"></div>
          <img
            src={require('../../assets/icons/control/icon-x.png')}
            alt=""
            className="active-filter__cross"
            onClick={() => removeAll()}
          />
        </div>
      )}
    </>
  )
}

export default ActiveFilters
