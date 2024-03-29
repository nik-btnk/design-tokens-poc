// Modules
import React from 'react'
import { Link } from 'react-router-dom'

// Utils
import { path } from '../../constants'
import { useBrandedUrl } from '../../hooks/useBrandedUrl'

// Components
import ProductCard from '../../components/product-list/ProductCard'

const PopularColors = ({ popularColors }) => {
  const productsUrl = useBrandedUrl(path.PRODUCTS)

  return (
    <div className="popular-colors__wrapper">
      <h2 className="popular-colors__title">Our Most Popular Colors</h2>
      <div className="popular-colors__container">
        {popularColors.map((color, index) => (
          <ProductCard
            pic={`../../assets/ice-creams/pic-${color.name}.png`}
            name={color.name}
            price={color.price}
            nutrition={color.nutrition}
            allergy={color.allergy}
            category={color.category}
            id={color.id}
            key={index}
            colorClassName={
              index % 4 === 0
                ? 'color-blue'
                : index % 3 === 0 || index === 1
                ? 'color-pink'
                : 'color-green'
            }
          />
        ))}
      </div>
      <div className="popular-colors__more-colors">
        <Link to={productsUrl}>
          <button>More colors</button>
        </Link>
      </div>
    </div>
  )
}

export default PopularColors
