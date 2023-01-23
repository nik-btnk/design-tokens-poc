// Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Components
import App from './App'

// CSS and assets
import './index.css'

// Utils
import { BrandProvider } from './contexts/brandContext'
import { CartProvider } from './contexts/CartContext/CartProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <BrandProvider>
          <App />
        </BrandProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
