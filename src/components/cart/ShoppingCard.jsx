import React from 'react'

//Assets
import iconCross from '../../assets/icons/control/icon-x.png'
import iconMinus from '../../assets/icons/control/icon-minus.png'
import iconPlus from '../../assets/icons/control/Icon=circle-plus.png'

const ShoppingCard = () => {
  return (
    <article className="shopping-card">
      <div className="shopping-card__background">
        <div className="shopping-card__img-container">
          <div className="shopping-card__img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="shopping-card__name-price-container">
          <span className="shopping-card__name">Vivacious Violet</span>
          <span className="shopping-card__price">$2.99</span>
        </div>
      </div>
      <div className="shopping-card__remove">
        <img src={iconCross} alt="" />
      </div>
      <div className="shopping-card__quantity">
        <span>Quantity</span>
        <img src={iconMinus} alt="remove-qty" />
        <div className="shopping-card__qty-bg">
          <span className="shopping-card__qty-text">2</span>
        </div>
        <img src={iconPlus} alt="add-qty" />
      </div>
      <span className="shopping-card__total-price">$5.98</span>
    </article>
  )
}

export default ShoppingCard
