import React from 'react'
import CartButton from '../cart/CartButton'

//Assets
import mascot from '../../assets/mascot.png'
import iconCross from '../../assets/icons/control/icon-x.png'

export const RaffledColor = ({
  setShowModal,
  name,
  price,
  nutrition,
  allergy,
  id
}) => {
  const handleClick = () => {
    setShowModal((prev) => !prev)
  }

  return (
    <>
      <div className="raffled-color__wrapper">
        <article className="raffled-color__card">
          <div className="raffled-color__header">
            <h4 className="raffled-color__header--title">I found for you</h4>
            <img className="raffled-color__header--logo" src={mascot} alt="" />
            <img
              onClick={handleClick}
              src={iconCross}
              alt=""
              className="raffled-color__header--cross"
            />
          </div>

          {/* Mobile */}
          <div className="raffled-color__mobile">
            <div className="raffled-color__mobile--background">
              <div className="raffled-color__mobile--img-container">
                <img
                  src={require(`../../assets/ice-creams/pic-${name}.png`)}
                  alt=""
                />
              </div>
              <div className="raffled-color__mobile--name-price-container">
                <span className="raffled-color__mobile--name">{name}</span>
                <span className="raffled-color__mobile--price">${price}</span>
              </div>
            </div>
          </div>
          {/* ----- */}

          <div className="raffled-color__img-container">
            <img
              src={require(`../../assets/ice-creams/pic-${name}.png`)}
              alt=""
            />
          </div>
          <div className="raffled-color__info-container">
            <span className="raffled-color__name">{name}</span>
            <span className="raffled-color__price">${price.toFixed(2)}</span>
            <div className="raffled-color__info">
              <p className="raffled-color__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                id deleniti harum porro nemo doloremque dolore unde placeat
                ullam nisi soluta quisquam ipsa qui! Nostrum minima soluta optio
                fugit sunt inventore, rem vitae excepturi temporibus consectetur
                vel molestias tempora magnam esse, expedita iure beatae sit eius
                error eligendi. Quo, eligendi.
              </p>
              <div className="raffled-color__properties">
                {allergy !== null &&
                  allergy.map((allergy, index) => (
                    <div key={index} className="raffled-color__allergy">
                      <img
                        className="raffled-color__allergy--icon"
                        src={allergy.icon}
                        alt=""
                      />
                      <span className="raffled-color__allergy--name">
                        {allergy.name}
                      </span>
                    </div>
                  ))}
                <div className="raffled-color__nutrition">
                  <img
                    className="raffled-color__nutrition--icon"
                    src={nutrition.icon}
                    alt=""
                  />
                  <span className="raffled-color__nutrition--name">
                    {nutrition.name}
                  </span>
                </div>
              </div>
            </div>
            <div className="raffled-color__cta">
              <CartButton id={id} />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
