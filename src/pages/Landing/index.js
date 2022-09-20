// Modules
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import HealthInformation from '../../components/product-details/HealthInformation'

// Utils
import products from '../../product-storage'

const Landing = () => {
  const testProduct = products[2]

  return (
    <div className="landing">
      <HealthInformation product={testProduct} />
      <span className="landing__title">Landing Page</span>

      <div className="landing__nav">
        <Link to="/productList">
          <button className="landing__nav--productList">To Product List</button>
        </Link>
        <Link to="/cart">
          <button className="landing__nav--cart">To Cart</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing
