// Modules
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// CSS and asets
import './App.css'
import './main.css'

// Components
import Landing from './pages/Landing'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Page404 from './pages/Page404'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Landing />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
