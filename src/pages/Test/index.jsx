import React from 'react'
import Button from '../../components/basics/Button'

const Test = () => {
  return (
    <div className="test">
      <h2>Test page</h2>
      <div
        className="buttons"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#eee'
        }}>
        <b>Buttons</b>
        <Button type="pink" />
        <Button type="blue" />
        <Button type="orange" />
        <Button type="green" />
      </div>
    </div>
  )
}

export default Test
