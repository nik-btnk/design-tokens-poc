import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

//Assets
import { ReactComponent as Mascot } from '../../assets/mascot.svg'

const ColorRoulette = () => {
  const [circleStyle, setCircleStyle] = useState({ transform: `rotate(0deg)` })
  const [buttonDisabled, setButtonDisabled] = useState(false)
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
    setButtonDisabled(true)
    updateNumber()
    setCircleStyle({ transform: `rotate(-${number}deg)` })
    setTimeout(() => {
      if (rouletteValue > 342 || rouletteValue <= 18) alert('Clockwork Orange')
      else if (rouletteValue > 18 && rouletteValue <= 54) alert('2')
      else if (rouletteValue > 54 && rouletteValue <= 90) alert('3')
      else if (rouletteValue > 90 && rouletteValue <= 126) alert('4')
      else if (rouletteValue > 126 && rouletteValue <= 162) alert('5')
      else if (rouletteValue > 162 && rouletteValue <= 198) alert('6')
      else if (rouletteValue > 198 && rouletteValue <= 234) alert('7')
      else if (rouletteValue > 234 && rouletteValue <= 270) alert('8')
      else if (rouletteValue > 270 && rouletteValue <= 306) alert('9')
      else if (rouletteValue > 306 && rouletteValue <= 342) alert('10')
      setButtonDisabled(false)
    }, 3000)
  }
  return (
    <div className="color-roulette">
      <div className="color-roulette__circle" style={circleStyle}>
        <div className="color-roulette__triangle one">
          <img
            src={require(`../../assets/ice-creams/pic-Clockwork Orange.png`)}
            alt=""
          />
        </div>
        <div className="color-roulette__triangle two">2</div>
        <div className="color-roulette__triangle three">3</div>
        <div className="color-roulette__triangle four">4</div>
        <div className="color-roulette__triangle five">5</div>
        <div className="color-roulette__triangle six">6</div>
        <div className="color-roulette__triangle seven">7</div>
        <div className="color-roulette__triangle eight">8</div>
        <div className="color-roulette__triangle nine">9</div>
        <div className="color-roulette__triangle ten">10</div>
      </div>
      <button
        className="color-roulette__spin-button"
        onClick={handleClick}
        disabled={buttonDisabled}>
        <Mascot />
        <span>Click me</span>
      </button>
      <div className="color-roulette__stopper"></div>
    </div>
  )
}

export default ColorRoulette
