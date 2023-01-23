// Modules
import React, { useContext, useEffect } from 'react'
import {
  Routes,
  Route,
  Navigate
  // useLocation,
  // useNavigate
} from 'react-router-dom'

// CSS and asets
import './App.css'
import './main.css'

// Components
import Landing from './pages/Landing'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Page404 from './pages/Page404'
import Header from './components/Header'
import Footer from './components/Footer'
import Test from './pages/Test'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import Playground from './pages/Playground'

// Utils
import { path } from './constants'
import { BrandContext } from './contexts/brandContext'

function App() {
  const {
    brand
    // setBrand
  } = useContext(BrandContext)
  // const location = useLocation()
  // const navigate = useNavigate()

  // Temporarily set currency to Ukrainian Hryvnia
  useEffect(() => {
    const currency = localStorage.getItem('currency')

    if (!currency || currency !== 'hryvnia')
      localStorage.setItem('currency', 'hryvnia')
  })

  return (
    <div className={`App ${brand}`}>
      {/* Theme toggle button to be enabled when ready to implement a second theme. */}
      {/* <button
        style={{
          position: 'fixed',
          right: '0',
          top: '85px',
          background: '#37CCC9',
          cursor: 'pointer',
          height: '50px',
          borderRadius: '15px 0 0 15px',
          color: 'white',
          fontWeight: '600',
          zIndex: '100'
        }}
        onClick={() => {
          if (brand === 'creamcolors') {
            localStorage.setItem('brand', 'afterdark')
            setBrand('afterdark')
            navigate(location.pathname.replace('creamcolors', 'afterdark'), {
              replace: true
            })
          } else {
            localStorage.setItem('brand', 'creamcolors')
            setBrand('creamcolors')
            navigate(location.pathname.replace('afterdark', 'creamcolors'), {
              replace: true
            })
          }
        }}>
        {brand === 'creamcolors' ? 'TO: AFTERDARK' : 'TO: CREAMCOLORS'}
      </button> */}

      <Header />

      <Routes>
        <Route path={`/${brand}`}>
          <Route path={path.LANDING} element={<Landing />} />
          <Route path={path.TEST} element={<Test />} />
          <Route path={path.PRODUCTS} element={<ProductList />} />
          <Route path={path.CART} element={<Cart />} />
          <Route path={path.DETAILS} element={<ProductDetails />} />
          <Route path={path.CHECKOUT} element={<Checkout />} />
          <Route path={path.NOTFOUND} element={<Page404 />} />
          <Route path="playground" element={<Playground />} />
          <Route path="*" element={<Navigate replace to={path.NOTFOUND} />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
