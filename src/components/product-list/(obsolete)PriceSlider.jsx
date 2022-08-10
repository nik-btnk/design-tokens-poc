import React from 'react'
import { useState } from 'react'

//Component for selecting a margin between 2 prices from $0 to $10

export const PriceSlider = ({ priceRange, setPriceRange }) => {
  const thumbWidth = 24
  const min = 0
  const max = 10
  const [perc, setPerc] = useState((priceRange[1] - min) / (max - min))
  const [offset, setOffset] = useState(thumbWidth / 2 - thumbWidth * perc)

  const handleChange = (e) => {
    const { min, max, value } = e.target

    //Set percentage and offset for then setting left position on price span
    const total = Number(max) - Number(min)
    setPerc((Number(value) - Number(min)) / total)
    setOffset(thumbWidth / 2 - thumbWidth * perc)

    //Set price range. Till we have a double-range component, the first value will always be 0
    setPriceRange([0, value])
  }

  return (
    <div className="price-slider-container">
      <input
        onChange={handleChange}
        type="range"
        min={min}
        max={max}
        value={priceRange[1]}
        className="price-slider"
      />
      <span
        className="price-value"
        style={{
          left: `calc(${perc * 100}% + ${offset}px)`
        }}>{`$${priceRange[1]}`}</span>
    </div>
  )
}
