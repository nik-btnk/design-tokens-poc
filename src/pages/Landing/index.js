// Modules
import React from 'react'

// Utils
/* import { path } from '../../constants' */
import products from '../../product-storage'

//Assets
import imgMascot from '../../assets/mascot.png'
import ProductCard from '../../components/product-list/ProductCard'

const Landing = () => {
  return (
    <div className="landing">
      <section className="landing__hero">
        <div className="landing__hero--banner">
          {/* Letter-ring-animation here */}
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
            Seeing is believing- so give us a look and see for yourself!
          </p>
        </div>
        <div>
          <img className="landing_presentation--mascot" src={imgMascot} />
        </div>
      </section>
      <section className="landing__find-new-color">
        <div className="landing__find-new-color--wrapper">
          <h2 className="landing__find-new-color--h2">
            Find Your New Favorite Color
          </h2>
          {/* The roulette will probably be a component */}
          <div className="landing__find-new-color--roulette"></div>
        </div>
      </section>
      <section className="landing__popular-colors">
        <div className="landing__popular-colors--wrapper">
          <h2 className="landing__popular-colors--title">
            Our Most Popular Colors
          </h2>
          <div className="landing__popular-colors--container">
            <ProductCard
              pic={`../../assets/ice-creams/pic-${products[3].name}.png`}
              name={products[3].name}
              price={products[3].price}
              nutrition={products[3].nutrition}
              allergy={products[3].allergy}
              category={products[3].category}
              id={products[3].id}
            />
            <ProductCard
              pic={`../../assets/ice-creams/pic-${products[1].name}.png`}
              name={products[1].name}
              price={products[1].price}
              nutrition={products[1].nutrition}
              allergy={products[1].allergy}
              category={products[1].category}
              id={products[1].id}
            />
            <ProductCard
              pic={`../../assets/ice-creams/pic-${products[6].name}.png`}
              name={products[6].name}
              price={products[6].price}
              nutrition={products[6].nutrition}
              allergy={products[6].allergy}
              category={products[6].category}
              id={products[6].id}
            />
            <ProductCard
              pic={`../../assets/ice-creams/pic-${products[2].name}.png`}
              name={products[2].name}
              price={products[2].price}
              nutrition={products[2].nutrition}
              allergy={products[2].allergy}
              category={products[2].category}
              id={products[2].id}
            />
          </div>
          <button className="landing__popular-colors--more-colors">
            More colors
          </button>
        </div>
      </section>
    </div>
  )
}

export default Landing
