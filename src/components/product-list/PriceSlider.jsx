import React from 'react'
import { useState } from 'react'

//Component for selecting a margin between 2 prices from $0 to $10

export const PriceSlider = () => {
  const thumbWidth = 24
  const [priceValue, setPriceValue] = useState(5)
  const [perc, setPerc] = useState(0.5)
  const [offset, setOffset] = useState(thumbWidth / 2 - thumbWidth * perc)

  const handleChange = (e) => {
    const { min, max, value } = e.target

    //Set our price value
    setPriceValue(value)

    //Set percentage and offset for then setting left position on price span
    const total = Number(max) - Number(min)
    setPerc((Number(value) - Number(min)) / total)
    setOffset(thumbWidth / 2 - thumbWidth * perc)
  }

  return (
    <div className="price-slider-container">
      <input
        onChange={handleChange}
        type="range"
        min="0"
        max="10"
        value={priceValue}
        className="price-slider"
      />
      <span
        className="price-value"
        style={{
          left: `calc(${perc * 100}% + ${offset}px)`
        }}>{`$${priceValue}`}</span>
    </div>
  )
}
