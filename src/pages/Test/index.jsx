import React from 'react'
import Button from '../../components/basics/Button'
import { PriceSlider } from '../../components/product-list/PriceSlider'

const flexCenter = {
  height: '10vh',
  width: '50%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#eee'
}

const Test = () => {
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
        <PriceSlider />
      </div>
    </div>
  )
}

export default Test
