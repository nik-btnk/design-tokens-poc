// Modules
import React, { useState } from 'react'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import CartButton from '../cart/CartButton'

// Assets
import iconInfo from '../../assets/icons/status/info.png'
import iconCross from '../../assets/icons/status/cross.png'
import iconCool from '../../assets/icons/descriptive/icon-Cool as Ice.png'
import iconHot from "../../assets/icons/descriptive/icon-Hot 'n Spicy.png"

const ProductCard = ({
  name,
  price,
  nutrition,
  allergy,
  category,
  id,
  showInfo = true,
  showTextWrap = false,
  colorClassName
}) => {
  const [isInfo, setInfo] = useState(false)
  const navigate = useNavigate()
  const infoButton = useRef(null)
  useOutsideAlerter(infoButton, setInfo)

  const handleClick = () => {
    setInfo((prevState) => !prevState)
  }

  const className = `${name.split(' ')[0].toLowerCase()}-${name
    .split(' ')[1]
    .toLowerCase()} `

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
    <div className={`wrapper ${colorClassName}`}>
      <article
        className={`product-card ${className}`}
        onClick={() => navigate(`/product/${id}`)}
        style={{ pointerEvents: isInfo ? 'none' : 'auto' }}>
        {showTextWrap && (
          <svg className={'product-card__wrapping-text'} viewBox="0 0 190 190">
            <defs>
              <path
                id="MyPath"
                d="M 95, 95
             m -100, 0
             a 100,100 0 1,1 200,0
             a 100,100 0 1,1 -200,0"
              />
            </defs>
            <text className={className}>
              <textPath xlinkHref="#MyPath">{makeWrappingText(name)}</textPath>
            </text>
          </svg>
        )}
        <div className={`product-card__background ${className}`}>
          <div className="product-card__img-container">
            <div className="product-card__img">
              <img
                src={require(`../../assets/ice-creams/pic-${name}.png`)}
                alt=""
              />
            </div>
          </div>
          <div
            className="product-card__name-price-container"
            style={isInfo ? { display: 'none' } : { display: 'flex' }}>
            <span className="product-card__name">{name}</span>
            <span className="product-card__price">${price.toFixed(2)}</span>
          </div>

          {showInfo && (
            <>
              <div
                className={`product-card__properties${
                  isInfo ? ' hide-properties' : ''
                }`}>
                <div className="product-card__property-container">
                  <img src={nutrition.icon} alt={nutrition.name} />
                </div>
                {allergy !== null &&
                  allergy.map((item, index) => (
                    <div
                      key={index}
                      className="product-card__property-container">
                      <img src={item.icon} alt={item.name} title={item.name} />
                    </div>
                  ))}
              </div>
            </>
          )}

          <div
            className="product-card__info-container"
            style={isInfo ? { display: 'flex' } : { display: 'none' }}>
            <div className="product-card__description">
              <p className="product-card__description--text">
                Color description. Nice and short. Three lines max.
              </p>
            </div>

            {category === 'Cool as Ice' ? (
              <div className="product-card__category cold">
                <img src={iconCool} alt="" />
                <span>Cool as Ice</span>
              </div>
            ) : (
              <div className="product-card__category hot">
                <img src={iconHot} alt="" />
                <span>Hot `n Spicy</span>
              </div>
            )}
          </div>
        </div>
      </article>

      {showInfo && (
        <>
          <button
            className="product-info-btn"
            ref={infoButton}
            onClick={handleClick}>
            <div className="product-info-btn__info-icon-container">
              <img src={isInfo ? iconCross : iconInfo} alt="" />
            </div>
          </button>
          <CartButton id={id} />
        </>
      )}
    </div>
  )
}

export default ProductCard
