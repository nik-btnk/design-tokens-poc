import React, { useState } from 'react'
import Button from '../../components/basics/Button'
import DoubleRangeSlider from '../../components/product-list/DoubleRangeSlider'
/* import { PriceSlider } from '../../components/product-list/PriceSlider'
 */
const flexCenter = {
  height: '10vh',
  width: '50%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#eee'
}

const Test = () => {
  const [priceRange, setPriceRange] = useState([0, 10])

  return (
    <div className="test">
      <h2>Test page</h2>
      <div className="buttons" style={flexCenter}>
        <b>Buttons</b>
        <Button type="pink" />
        <Button type="blue" />
        <Button type="orange" />
        <Button type="green" />
      </div>
      <div style={flexCenter}>
        <b>Price Slider</b>
        <br />
        {/* <PriceSlider priceRange={priceRange} setPriceRange={setPriceRange} /> */}
      </div>
      <div style={flexCenter}>
        <b>Double Range Price Slider</b>
        <br />
        <DoubleRangeSlider
          min={0}
          max={10}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <span>
          {priceRange[0]} - {priceRange[1]}
        </span>
      </div>
    </div>
  )
}

export default Test
