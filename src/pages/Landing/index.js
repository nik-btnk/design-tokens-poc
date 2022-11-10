// Modules
import React, { useState } from 'react'

// Utils
import products from '../../product-storage'

//Components
import ColorRoulette from '../../components/landing/ColorRoulette'
import PopularColors from '../../components/landing/PopularColors'

//Assets
import imgMascot from '../../assets/mascot.png'
import imgMascotXl from '../../assets/mascot-xl.png'
import { RaffledColor } from '../../components/landing/RaffledColor'

const Landing = () => {
  const popularColors = [products[1], products[4], products[3], products[6]]
  const name = 'Creame Colors ·'
  const [selectedColor, setSelectedColor] = useState()
  const [showModal, setShowModal] = useState(false)

  const getTextWidth = (text, font) => {
    const canvas =
      getTextWidth.canvas ||
      (getTextWidth.canvas = document.createElement('canvas'))
    const context = canvas.getContext('2d')
    context.font = font
    const metrics = context.measureText(text)
    return metrics.width
  }

  const makeWrappingText = (text) => {
    const spacer = '*'
    const targetTextLength = 620
    let characterString = text
    const textWidth = getTextWidth(characterString, 'normal 16px Abril Fatface')

    if (
      textWidth + getTextWidth(name, 'normal 16px Abril Fatface') <
      targetTextLength
    ) {
      return makeWrappingText(characterString + spacer + name)
    } else {
      let finalString = characterString + spacer
      const availableSpace =
        targetTextLength -
        getTextWidth(
          finalString.replaceAll(spacer, ''),
          'normal 16px Abril Fatface'
        )
      const spaceWidth = getTextWidth('\u00A0', 'normal 16x Abril Fatface')
      const numberOfInsertionPoints = finalString
        .split('')
        .filter((letter) => letter === spacer).length
      const numberOfSpacesToInsert = Math.ceil(
        availableSpace / spaceWidth / numberOfInsertionPoints
      )

      return finalString.replaceAll(
        spacer,
        '\u00A0'.repeat(numberOfSpacesToInsert)
      )
    }
  }
  return (
    <div className="landing">
      <div className="spacer"></div>
      <section className="landing__hero">
        <div className="landing__hero--banner">
          <svg className={'landing__wrapping-text'} viewBox="0 0 190 190">
            <defs>
              <path
                id="MyPath"
                d="M 95, 95
               m -100, 0
               a 100,100 0 1,1 200,0
               a 100,100 0 1,1 -200,0"
              />
            </defs>
            <text className="creame-colors">
              <textPath xlinkHref="#MyPath">
                {makeWrappingText('Creame Colors ·')}
              </textPath>
            </text>
          </svg>
          <img src={imgMascot} />
        </div>
      </section>
      <div className="spacer"></div>
      <section className="landing__presentation">
        <div className="landing__presentation--wrapper">
          <div>
            <h3 className="landing__presentation--title">
              “Life’s better in color.”
            </h3>
            <p className="landing__presentation--description">
              That’s the motto of our founding brothers Bill and Ted, and what
              we reaffirm with every vibrant scoop we’ve served since 1994.
              We’re delighted to finally offer our unique perspective to the
              world with direct-to-your-door shipping and guaranteed no-melt
              packaging.
              <br />
              <br />
              Seeing is believing- so give us a look and see for yourself!
            </p>
          </div>
          <div className="landing__presentation--mascot">
            <img src={imgMascotXl} />
          </div>
        </div>
      </section>
      <div className="spacer"></div>

      <section className="landing__find-new-color">
        {showModal && (
          <RaffledColor
            setShowModal={setShowModal}
            name={selectedColor.name}
            price={selectedColor.price}
            nutrition={selectedColor.nutrition}
            allergy={selectedColor.allergy}
          />
        )}
        <div className="landing__find-new-color--wrapper">
          <h2 className="landing__find-new-color--title">
            Find Your New Favorite Color
          </h2>
          <ColorRoulette
            setSelectedColor={setSelectedColor}
            setShowModal={setShowModal}
          />
        </div>
      </section>
      <div className="spacer"></div>

      <section className="landing__popular-colors">
        <PopularColors popularColors={popularColors} />
      </section>
      <div className="spacer"></div>
    </div>
  )
}

export default Landing
