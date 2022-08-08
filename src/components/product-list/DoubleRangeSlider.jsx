import React, { useState } from 'react'

const DoubleRangeSlider = ({ priceRange, setPriceRange }) => {
  const thumbWidth = 24
  const min = 0
  const max = 10
  const [percL, setPercL] = useState((priceRange[0] - min) / (max - min))
  const [percR, setPercR] = useState((priceRange[1] - min) / (max - min))
  const [offsetL, setOffsetL] = useState(thumbWidth / 2 - thumbWidth * percL)
  const [offsetR, setOffsetR] = useState(thumbWidth / 2 - thumbWidth * percR)

  const handleChange = (e) => {
    const { min, max } = e.target
    const range = e.target.getAttribute('data-range')
    const total = Number(max) - Number(min)

    if (range === 'left') {
      setPriceRange([e.target.value, priceRange[1]])
      setPercL((Number(e.target.value) - Number(min)) / total)
      setOffsetL(thumbWidth / 2 - thumbWidth * percL)
    }
    if (range === 'right') {
      setPriceRange([priceRange[0], e.target.value])
      setPercR((Number(e.target.value) - Number(min)) / total)
      setOffsetR(thumbWidth / 2 - thumbWidth * percR)
    }
  }

  return (
    <div className="slider-container">
      <input
        type="range"
        data-range="left"
        min={0}
        max={10}
        value={priceRange[0]}
        onChange={handleChange}
        className="thumb thumb--zindex-3"
      />
      <input
        type="range"
        data-range="right"
        min={0}
        max={10}
        value={priceRange[1]}
        onChange={handleChange}
        className="thumb thumb--zindex-4"
      />
      <div className="slider__track" />
      <span
        className="price-value__left"
        style={{
          left: `calc(${percL * 100}% + ${offsetL}px)`
        }}>{`$${priceRange[0]}`}</span>
      <span
        className="price-value__right"
        style={{
          left: `calc(${percR * 100}% + ${offsetR}px)`
        }}>{`$${priceRange[1]}`}</span>
    </div>
  )
}

export default DoubleRangeSlider
