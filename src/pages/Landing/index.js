// Modules
import React from 'react'

// Utils
import { path } from '../../constants'
import products from '../../product-storage'
import { Link } from 'react-router-dom'

//Assets
import imgMascot from '../../assets/mascot.png'
import ProductCard from '../../components/product-list/ProductCard'
import ColorRoulette from '../../components/landing/ColorRoulette'

const Landing = () => {
  const popularColors = [products[1], products[4], products[3], products[6]]
  const name = 'Creame Colors ·'

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
    const textWidth = getTextWidth(characterString, 'normal 14px Abril Fatface')

    if (
      textWidth + getTextWidth(name, 'normal 14px Abril Fatface') <
      targetTextLength
    ) {
      return makeWrappingText(characterString + spacer + name)
    } else {
      let finalString = characterString + spacer
      const availableSpace =
        targetTextLength -
        getTextWidth(
          finalString.replaceAll(spacer, ''),
          'normal 14px Abril Fatface'
        )
      const spaceWidth = getTextWidth('\u00A0', 'normal 14px Abril Fatface')
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

      <section className="landing__presentation">
        <div className="landing__presentation--wrapper">
          <h3 className="landing__presentation--title">
            “Life’s better in color.”
          </h3>
          <p className="landing__presentation--description">
            That’s the motto of our founding brothers Bill and Ted, and what we
            reaffirm with every vibrant scoop we’ve served since 1994. We’re
            delighted to finally offer our unique perspective to the world with
            direct-to-your-door shipping and guaranteed no-melt packaging.
            <br />
            <br />
            Seeing is believing- so give us a look and see for yourself!
          </p>
          <div className="landing__presentation--mascot">
            <img src={imgMascot} />
          </div>
        </div>
      </section>

      <section className="landing__find-new-color">
        <div className="landing__find-new-color--wrapper">
          <h2 className="landing__find-new-color--title">
            Find Your New Favorite Color
          </h2>
          <ColorRoulette />
        </div>
      </section>

      <section className="landing__popular-colors">
        <div className="landing__popular-colors--wrapper">
          <h2 className="landing__popular-colors--title">
            Our Most Popular Colors
          </h2>
          <div className="landing__popular-colors--container">
            {popularColors.map((color, index) => (
              <ProductCard
                pic={`../../assets/ice-creams/pic-${color.name}.png`}
                name={color.name}
                price={color.price}
                nutrition={color.nutrition}
                allergy={color.allergy}
                category={color.category}
                id={color.id}
                key={index}
              />
            ))}
          </div>
          <Link to={path.PRODUCTS}>
            <button className="landing__popular-colors--more-colors">
              More colors
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Landing
