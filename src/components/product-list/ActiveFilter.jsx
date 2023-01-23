import React from 'react'
import generalData from '../../general-data'

//assets
import allergyIcon from '../../assets/icons/descriptive/icon-Allergy.png'

const ActiveFilters = ({ priceRange, removeAll, removeFilter, type }) => {
  const filterName = type
  const currency = localStorage.getItem('currency') || 'hryvnia'

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
                src={allergyIcon}
                alt=""
                className="active-filter__prohibition"
              />
              <span>No {filterName}</span>
            </>
          ) : (
            <span>{filterName}</span>
          )}
          <div
            className="icon-cross active-filter__cross"
            onClick={() => {
              removeFilter(filterName)
            }}></div>
        </div>
      ) : filterName === 'Price' ? (
        <div className="active-filter">
          <span>
            Price Range:{' '}
            {`${currency === 'usd' ? '$' : ''}${priceRange[0]}${
              currency === 'hryvnia' ? '₴' : ''
            } - ${currency === 'usd' ? '$' : ''}${priceRange[1]}${
              currency === 'hryvnia' ? '₴' : ''
            }`}
          </span>
        </div>
      ) : (
        <div className="active-filter">
          <span>{filterName} All</span>
          <div
            className="icon-cross active-filter__cross"
            onClick={() => {
              removeAll()
            }}></div>
        </div>
      )}
    </>
  )
}

export default ActiveFilters
