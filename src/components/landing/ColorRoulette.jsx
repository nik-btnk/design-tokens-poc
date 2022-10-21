import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ColorRoulette = () => {
  const [circleStyle, setCircleStyle] = useState({ transform: `rotate(0deg)` })
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  //Set a number between 1000 and 36000
  const [number, setNumber] = useState(getRandom(1000, 3600))

  //Roulette value will define selected triangle. Represents degrees from 1 to 360
  const [rouletteValue, setRouletteValue] = useState(
    number > 360 ? number % 360 : 1
  )

  const updateNumber = () => {
    const random = getRandom(1000, 3600)
    setNumber(random)
    console.log('New generated random: ' + number)
  }

  useEffect(() => {
    setRouletteValue(number > 360 ? number % 360 : 1)
    console.log('New roulette value: ' + rouletteValue)
  }, [number])

  const handleClick = () => {
    updateNumber()
    setCircleStyle({ transform: `rotate(-${number}deg)` })
    setTimeout(() => {
      if (rouletteValue > 330 || rouletteValue <= 30) alert('1')
      else if (rouletteValue > 30 && rouletteValue <= 90) alert('2')
      else if (rouletteValue > 90 && rouletteValue <= 150) alert('3')
      else if (rouletteValue > 150 && rouletteValue <= 210) alert('4')
      else if (rouletteValue > 210 && rouletteValue <= 270) alert('5')
      else if (rouletteValue > 270 && rouletteValue <= 330) alert('6')
    }, 3000)
  }
  return (
    <div className="color-roulette">
      <div className="color-roulette__circle" style={circleStyle}>
        <div className="color-roulette__triangle one">1</div>
        <div className="color-roulette__triangle two">2</div>
        <div className="color-roulette__triangle three">3</div>
        <div className="color-roulette__triangle four">4</div>
        <div className="color-roulette__triangle five">5</div>
        <div className="color-roulette__triangle six">6</div>
      </div>
      <span className="mid-item"></span>
      <button id="spin" onClick={handleClick}>
        Spin
      </button>
      <div className="stopper"></div>
    </div>
  )
}

export default ColorRoulette
