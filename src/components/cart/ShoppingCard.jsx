import React from 'react'
import CartContext from '../../contexts/CartContext/CartProvider.js'
import { useContext } from 'react'

//Assets
import iconCross from '../../assets/icons/control/icon-x.png'
import iconMinus from '../../assets/icons/control/icon-minus.png'
import iconPlus from '../../assets/icons/control/Icon=circle-plus.png'

const ShoppingCard = ({
  product: { name, price, id, quantity },
  productTotal
}) => {
  const className = `${name.split(' ')[0].toLowerCase()}-${name
    .split(' ')[1]
    .toLowerCase()} `

  const { addQty, removeQty, removeProduct } = useContext(CartContext)

  return (
    <article className={`shopping-card ${className}`}>
      <div className={`shopping-card__background ${className}`}>
        <div className="shopping-card__img-container">
          <div className="shopping-card__img">
            <img
              src={require(`../../assets/ice-creams/pic-${name}.png`)}
              alt=""
            />
          </div>
        </div>
        <div className="shopping-card__name-price-container">
          <span className="shopping-card__name">{name}</span>
          <span className="shopping-card__price">${price.toFixed(2)}</span>
        </div>
      </div>
      <div className={`shopping-card__background--tablet ${className}`}>
        <div className="shopping-card__img-container">
          <div className="shopping-card__img">
            <img
              src={require(`../../assets/ice-creams/pic-${name}.png`)}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="shopping-card__name-price-container--tablet">
        <span className="shopping-card__name">{name}</span>
        <span className="shopping-card__price">
          {price.toFixed(2)} <br></br>each
        </span>
      </div>
      <div className="shopping-card__remove">
        <img src={iconCross} alt="" onClick={() => removeProduct(id)} />
      </div>
      <div className="shopping-card__qty-price-container">
        <div className="shopping-card__quantity">
          <span className="shopping-card__quantity-txt">Quantity</span>
          <img
            src={iconMinus}
            className="remove-qty"
            onClick={() => removeQty(id)}
          />
          <div className="shopping-card__qty-bg">
            <span className="shopping-card__qty-text">{quantity}</span>
          </div>
          <img src={iconPlus} className="add-qty" onClick={() => addQty(id)} />
        </div>
        <span className="shopping-card__total-price">
          ${productTotal.toFixed(2)}
        </span>
      </div>
    </article>
  )
}

export default ShoppingCard
