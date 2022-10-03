// Modules
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

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

// Utils
import { path } from './constants'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Header isVertical={location.pathname === path.CHECKOUT ? false : true} />

      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Landing />} />
        <Route path="/test" element={<Test />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
