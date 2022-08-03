import React, { useState } from 'react'
import { FilterControl } from './FilterControl'
//Filters menu
export const Filters = () => {
  const [selected, setSelected] = useState([])
  const [priceRange, setPriceRange] = useState([0, 0])
  return (
    <>
      <div className="filters">
        <h4>Filters:</h4>
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