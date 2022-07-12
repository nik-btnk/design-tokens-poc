// Modules
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// CSS and asets
import './App.css'

// Components
import Landing from './components/Landing'
import Storefront from './components/Storefront'
import Cart from './components/Cart'
import Page404 from './components/Page404'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='*' element={<Page404 />} />

        <Route path='/' element={<Landing />} />
        <Route path='/shop' element={<Storefront />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
