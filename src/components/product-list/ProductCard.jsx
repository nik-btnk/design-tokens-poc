import React, { useState } from 'react'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'

//assets
import iconInfo from '../../assets/icons/status/info.png'
import iconCross from '../../assets/icons/status/cross.png'
import iconCool from '../../assets/icons/descriptive/icon-Cool as Ice.png'
import iconHot from "../../assets/icons/descriptive/icon-Hot 'n Spicy.png"
import iconCart from '../../assets/Icon=cart-add.png'
import { useRef } from 'react'

const ProductCard = ({
  name,
  price,
  nutrition,
  allergy,
  category,
  showInfo = true
}) => {
  const [isInfo, setInfo] = useState(false)
  const infoButton = useRef(null)
  useOutsideAlerter(infoButton, setInfo)

  const handleClick = () => {
    setInfo((prevState) => !prevState)
  }

  const className = `${name.split(' ')[0].toLowerCase()}-${name
    .split(' ')[1]
    .toLowerCase()} `

  // NOTE: improve logic of space adding.
  // Calculate available remaining space and distribute white spaces evenly.
  const makeWrappingText = (text) => {
    const space = '\u00A0\u00A0\u00A0\u00A0'
    const characterCapacity = 75
    let characterString = text
    if (characterCapacity > characterString.split('').length) {
      return makeWrappingText(characterString + space + name)
    } else {
      return characterString
    }
  }

  return (
    <article className={`product-card ${className}`}>
      {!showInfo && (
        <svg className="product-card__wrapping-text" viewBox="0 0 190 190">
          <defs>
            <path
              id="MyPath"
              d="M 95, 95
             m -100, 0
             a 100,100 0 1,1 200,0
             a 100,100 0 1,1 -200,0"
            />
          </defs>
          <text>
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
            <button
              className="product-card__info-button"
              ref={infoButton}
              onClick={handleClick}>
              <div className="product-card__info-icon-container">
                <img src={isInfo ? iconCross : iconInfo} alt="" />
              </div>
            </button>

            <div
              className={`product-card__properties${
                isInfo ? ' hide-properties' : ''
              }`}>
              <div className="product-card__property-container">
                <img src={nutrition.icon} alt={nutrition.name} />
              </div>
              {allergy !== null &&
                allergy.map((item, index) => (
                  <div key={index} className="product-card__property-container">
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

      {showInfo && (
        <button className="product-card__cta">
          <img src={iconCart} alt="" />
          Add to Cart
        </button>
      )}
    </article>
  )
}

export default ProductCard
