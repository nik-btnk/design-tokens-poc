import React from 'react'

const ActiveFilters = ({ type }) => {
  const filterName = type
  return (
    <>
      {filterName !== 'Remove' ? (
        <div className="active-filter">
          <img
            src={require(`../../assets/icons/descriptive/icon-${filterName}.png`)}
            alt=""
            className="active-filter__icon"
          />
          <span>{filterName}</span>
          <div className="active-filter__spacer"></div>
          <img
            src={require('../../assets/icons/control/icon-x.png')}
            alt=""
            className="active-filter__cross"
          />
        </div>
      ) : (
        <div className="active-filter">
          <span>{filterName} All</span>
          <div className="active-filter__spacer"></div>
          <img
            src={require('../../assets/icons/control/icon-x.png')}
            alt=""
            className="active-filter__cross"
          />
        </div>
      )}
    </>
  )
}

export default ActiveFilters
