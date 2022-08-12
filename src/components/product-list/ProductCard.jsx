import React, { useState } from 'react'

//assets
import iconInfo from '../../assets/icons/control/Icon=circle-info.png'
import iconCross from '../../assets/icons/control/icon-x.png'
import iconCool from '../../assets/icons/descriptive/icon-Cool as Ice.png'
import iconMilk from '../../assets/icons/descriptive/icon-Milk.png'
import iconEggs from '../../assets/icons/descriptive/icon-Eggs.png'
import iconNuts from '../../assets/icons/descriptive/icon-Nuts.png'
import iconLowFat from '../../assets/icons/descriptive/icon-Low Fat.png'
import pinkPanther from '../../assets/ice-creams/pink-panther.png'

const ProductCard = ({ name, price }) => {
  const [isInfo, setInfo] = useState(false)
  const handleClick = () => {
    setInfo((prevState) => !prevState)
  }

  return (
    <article className="product-card">
      <div className="product-card__background">
        <div className="product-card__img">
          <img src={pinkPanther} alt="" />
        </div>
        <div
          className="product-card__name-price-container"
          style={isInfo ? { display: 'none' } : { display: 'flex' }}>
          <span className="product-card__name">{name}</span>
          <span className="product-card__price">${price}</span>
        </div>
        <button className="product-card__info-button" onClick={handleClick}>
          <img src={isInfo ? iconCross : iconInfo} alt="" />
        </button>
        <div
          className="product-card__properties"
          style={isInfo ? { display: 'none' } : { display: 'flex' }}>
          <div className="product-card__property-container">
            <img src={iconMilk} alt="" />
          </div>
          <div className="product-card__property-container">
            <img src={iconEggs} alt="" />
          </div>
          <div className="product-card__property-container">
            <img src={iconNuts} alt="" />
          </div>
          <div className="product-card__property-container">
            <img src={iconLowFat} alt="" />
          </div>
        </div>

        <div
          className="product-card__info-container"
          style={isInfo ? { display: 'flex' } : { display: 'none' }}>
          <div className="product-card__description">
            <p className="product-card__description--text">
              Color description. Nice and short. Three lines max.
            </p>
          </div>
          <div className="product-card__category cold">
            <img src={iconCool} alt="" />
            <span>Cool as Ice</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
