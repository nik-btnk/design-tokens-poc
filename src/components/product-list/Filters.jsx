import React from 'react'
import { FilterControl } from './FilterControl'
//Filters menu
export const Filters = () => {
  return (
    <div className="filter">
      <h2>Filters</h2>
      <FilterControl type="Nutrition" />
      <FilterControl type="Category" />
      <FilterControl type="Allergies" />
      <FilterControl type="Price" />
    </div>
  )
}
