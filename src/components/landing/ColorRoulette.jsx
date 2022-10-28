import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

//Utils
import products from '../../product-storage'

//Assets
import { ReactComponent as Mascot } from '../../assets/mascot.svg'

const ColorRoulette = ({ setSelectedColor, setShowModal }) => {
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
    let mySelectedColor
    setButtonDisabled(true)
    updateNumber()
    setCircleStyle({ transform: `rotate(-${number}deg)` })

    if (rouletteValue > 342 || rouletteValue <= 18)
      mySelectedColor = products[0]
    else if (rouletteValue > 18 && rouletteValue <= 54)
      mySelectedColor = products[1]
    else if (rouletteValue > 54 && rouletteValue <= 90)
      mySelectedColor = products[2]
    else if (rouletteValue > 90 && rouletteValue <= 126)
      mySelectedColor = products[3]
    else if (rouletteValue > 126 && rouletteValue <= 162)
      mySelectedColor = products[4]
    else if (rouletteValue > 162 && rouletteValue <= 198)
      mySelectedColor = products[5]
    else if (rouletteValue > 198 && rouletteValue <= 234)
      mySelectedColor = products[6]
    else if (rouletteValue > 234 && rouletteValue <= 270)
      mySelectedColor = products[7]
    else if (rouletteValue > 270 && rouletteValue <= 306)
      mySelectedColor = products[8]
    else if (rouletteValue > 306 && rouletteValue <= 342)
      mySelectedColor = products[9]
    //open a modal which ice cream depends on raffled ice cream
    setSelectedColor(mySelectedColor)
    setShowModal(true)
    setTimeout(() => {
      setButtonDisabled(false)
    }, 3000)
  }

  return (
    <div className="color-roulette">
      <div className="color-roulette__circle" style={circleStyle}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`color-roulette__triangle ${`${product.name
              .split(' ')[0]
              .toLowerCase()}-${product.name.split(' ')[1].toLowerCase()} `}`}>
            <img
              src={require(`../../assets/ice-creams/pic-${product.name}.png`)}
              alt={product.name}
            />
          </div>
        ))}
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
