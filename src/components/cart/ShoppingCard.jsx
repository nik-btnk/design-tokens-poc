import React from 'react'

//Assets
import iconCross from '../../assets/icons/control/icon-x.png'
import iconMinus from '../../assets/icons/control/icon-minus.png'
import iconPlus from '../../assets/icons/control/Icon=circle-plus.png'
import imgPlaceholder from '../../assets/ice-creams/pic-Clockwork Orange.png'

const ShoppingCard = () => {
  return (
    <article className="shopping-card">
      <div className="shopping-card__background">
        <div className="shopping-card__img-container">
          <div className="shopping-card__img">
            <img src={imgPlaceholder} alt="" />
          </div>
        </div>
        <div className="shopping-card__name-price-container">
          <span className="shopping-card__name">Vivacious Violet</span>
          <span className="shopping-card__price">$2.99</span>
        </div>
      </div>
      <div className="shopping-card__background--tablet">
        <div className="shopping-card__img-container">
          <div className="shopping-card__img">
            <img src={imgPlaceholder} alt="" />
          </div>
        </div>
      </div>
      <div className="shopping-card__name-price-container--tablet">
        <span className="shopping-card__name">Vivacious Violet</span>
        <span className="shopping-card__price">
          $2.99 <br></br>each
        </span>
      </div>
      <div className="shopping-card__remove">
        <img src={iconCross} alt="" />
      </div>
      <div className="shopping-card__qty-price-container">
        <div className="shopping-card__quantity">
          <span className="shopping-card__quantity-txt">Quantity</span>
          <img src={iconMinus} className="remove-qty" />
          <div className="shopping-card__qty-bg">
            <span className="shopping-card__qty-text">2</span>
          </div>
          <img src={iconPlus} className="add-qty" />
        </div>
        <span className="shopping-card__total-price">$5.98</span>
      </div>
    </article>
  )
}

export default ShoppingCard
