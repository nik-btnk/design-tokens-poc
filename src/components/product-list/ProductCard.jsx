import React, { useState } from 'react'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'

//assets
import iconInfo from '../../assets/icons/control/Icon=circle-info.png'
import iconCross from '../../assets/icons/control/icon-x.png'
import iconCool from '../../assets/icons/descriptive/icon-Cool as Ice.png'
import iconHot from "../../assets/icons/descriptive/icon-Hot 'n Spicy.png"

import iconCart from '../../assets/Icon=cart-add.png'
import { useRef } from 'react'

const ProductCard = ({ name, price, nutrition, allergy, category }) => {
  const [isInfo, setInfo] = useState(false)
  const infoButton = useRef(null)
  useOutsideAlerter(infoButton, setInfo)

  const handleClick = () => {
    setInfo((prevState) => !prevState)
  }

  return (
    <article className="product-card">
      <div className="product-card__background">
        <div className="product-card__img">
          <img
            src={require(`../../assets/ice-creams/pic-${name}.png`)}
            alt=""
          />
        </div>
        <div
          className="product-card__name-price-container"
          style={isInfo ? { display: 'none' } : { display: 'flex' }}>
          <span className="product-card__name">{name}</span>
          <span className="product-card__price">${price}</span>
        </div>
        <button
          className="product-card__info-button"
          ref={infoButton}
          onClick={handleClick}>
          <img src={isInfo ? iconCross : iconInfo} alt="" />
        </button>
        <div
          className="product-card__properties"
          style={isInfo ? { display: 'none' } : { display: 'flex' }}>
          <div className="product-card__property-container">
            <img
              src={require(`../../assets/icons/descriptive/icon-${nutrition}.png`)}
              alt=""
            />
          </div>
          {allergy !== null &&
            allergy.map((item, index) => (
              <div key={index} className="product-card__property-container">
                <img
                  src={require(`../../assets/icons/descriptive/icon-${item}.png`)}
                  alt={item}
                  title={item}
                />
              </div>
            ))}
        </div>

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
      <button className="product-card__cta">
        <img src={iconCart} alt="" />
        Add to Cart
      </button>
    </article>
  )
}

export default ProductCard
