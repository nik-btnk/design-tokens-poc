import React, { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

// Context has been created
const BrandContext = createContext()

// Provider
const BrandProvider = ({ children }) => {
  const navigate = useNavigate()
  const [brand, setBrand] = useState(
    localStorage.getItem('brand') || 'creamcolors'
  )

  useEffect(() => {
    const brand = localStorage.getItem('brand')
    if (!brand) {
      localStorage.setItem('brand', 'creamcolors')
      setBrand('creamcolors')
    }
  }, [])

  useEffect(() => {
    const currentBrand = location.pathname.split('/')[1]
    if (currentBrand !== brand) {
      navigate(`/${brand}${location.pathname}`, {
        replace: true
      })
    }
  }, [])

  return (
    <BrandContext.Provider value={{ brand, setBrand }}>
      {children}
    </BrandContext.Provider>
  )
}
export { BrandContext, BrandProvider }
