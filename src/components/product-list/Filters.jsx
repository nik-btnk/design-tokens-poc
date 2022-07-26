import React from 'react'
import { FilterControl } from './FilterControl'
//Filters menu
export const Filters = () => {
  return (
    <div className="filter">
      <h2>Filters</h2>
      <FilterControl type="price" />
      <FilterControl type="allergies" />
      <FilterControl type="nutrition" />
      <FilterControl type="category" />
    </div>
  )
}
