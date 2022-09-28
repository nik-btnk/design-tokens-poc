// Modules
import React from 'react'

const HealthInformation = ({ product: { allergy, nutrition, calories } }) => {
  const iconList = !allergy ? [nutrition] : [nutrition, ...allergy]

  return (
    <div className="health-info">
      <div className="health-info__wrapper">
        <span className="health-info__title">Health Information</span>

        <div className="health-info__calories-container">
          <span className="health-info__calories-container--title">
            Calories:
          </span>
          <span className="health-info__calories-container--calories">{` ≈ ${calories} kCal`}</span>
        </div>

        <div className="health-info__items-container">
          {iconList.map((item) => {
            return (
              <div
                className="health-info__items-container--item"
                key={item.name}>
                <img className="icon" src={item.icon} alt={item.description} />
                <span className="name">{item.name}</span>
                <span className="description">{item.description}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HealthInformation
