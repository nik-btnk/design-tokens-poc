// Modules
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

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
import { CartProvider } from './contexts/CartContext/CartProvider'

function App() {
  const ThemeContext = React.createContext()

  const [theme, setTheme] = useState('cream-colors')

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CartProvider>
          <Header />
          <Routes>
            <Route path={path.LANDING} element={<Landing />} />
            <Route path={path.TEST} element={<Test />} />
            <Route path={path.PRODUCTS} element={<ProductList />} />
            <Route path={path.CART} element={<Cart />} />
            <Route path={path.DETAILS} element={<ProductDetails />} />
            <Route path={path.CHECKOUT} element={<Checkout />} />
            <Route path={path.NOTFOUND} element={<Page404 />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="*" element={<Navigate replace to={path.NOTFOUND} />} />
          </Routes>

          <Footer />
        </CartProvider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
