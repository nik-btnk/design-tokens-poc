import React, { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

//Util
import products from '../../product-storage'

const CartContext = createContext()

const currency = localStorage.getItem('currency') || 'hryvnia'

function CartProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useLocalStorage(
    'selectedProducts',
    []
  )

  const [productsTotal, setProductsTotal] = useLocalStorage('productsTotal', 0)
  const [taxes, setTaxes] = useLocalStorage('taxes', 0)
  const [total, setTotal] = useLocalStorage('total', 0)
  const [totalQty, setTotalQty] = useLocalStorage('totalQty', 0)
  const [displayCartAnimation, setDisplayCartAnimation] = useState(false)
  const calcProductsTotal = () => {
    let total = 0
    selectedProducts.forEach((product) => {
      total += product?.price[currency]?.amount * product.quantity
    })

    setProductsTotal(total)
  }

  const calcTaxes = () => {
    let newValue = productsTotal * 0.18
    setTaxes(newValue)
  }

  const calcTotal = () => {
    let newValue = productsTotal + taxes
    setTotal(newValue)
  }

  const calcTotalQty = () => {
    let sum = 0
    selectedProducts.forEach((product) => {
      sum += product.quantity
    })

    if (sum >= totalQty) {
      setTimeout(() => {
        setTotalQty(sum)
      }, 1400)
    } else setTotalQty(sum)
  }

  useEffect(() => {
    calcProductsTotal()
    calcTotalQty()
  }, [selectedProducts])

  useEffect(() => {
    calcTaxes()
  }, [productsTotal])

  useEffect(() => {
    calcTotal()
  }, [taxes])

  const addProduct = (id) => {
    const newProduct = products.find((product) => product.id === id)

    if (newProduct === undefined) return
    const updateState = () =>
      selectedProducts.map((obj) => {
        if (obj.id === newProduct.id) {
          return { ...obj, quantity: ++obj.quantity }
        }
        return obj
      })
    selectedProducts.some((product) => product.id == newProduct.id)
      ? setSelectedProducts(updateState)
      : setSelectedProducts([
          ...selectedProducts,
          {
            ...newProduct,
            quantity: newProduct.quantity === 0 ? 1 : 0
          }
        ])
    setDisplayCartAnimation(true)

    setTimeout(() => {
      setDisplayCartAnimation(false)
    }, 2000)
  }

  const removeProduct = (id) => {
    setSelectedProducts((old) => [
      ...old.filter((product) => product.id !== id)
    ])
  }

  const isAdded = (id) => {
    return selectedProducts.some((product) => product.id === id)
  }

  const addQty = (id) => {
    const newState = selectedProducts.map((obj) => {
      if (obj.id === id) {
        let newQty = ++obj.quantity

        return { ...obj, quantity: newQty }
      }

      return obj
    })

    setSelectedProducts(newState)

    if (displayCartAnimation === false) {
      {
        setDisplayCartAnimation(true)

        setTimeout(() => {
          setDisplayCartAnimation(false)
        }, 2000)
      }
    }
  }

  const removeQty = (id) => {
    const newState = selectedProducts.map((obj) => {
      if (obj.id === id) {
        if (obj.quantity > 1) {
          let newQty = --obj.quantity
          return { ...obj, quantity: newQty }
        }
      }
      return obj
    })

    setSelectedProducts(newState)
  }

  const calcProductTotal = (id) => {
    const myProduct = selectedProducts.find((product) => product.id === id)
    if (myProduct !== undefined) {
      let total
      total = myProduct?.price[currency]?.amount * myProduct.quantity
      return total
    }
  }

  const data = {
    selectedProducts,
    addProduct,
    removeProduct,
    isAdded,
    addQty,
    removeQty,
    calcProductTotal,
    productsTotal,
    taxes,
    total,
    totalQty,
    displayCartAnimation
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartProvider }
export default CartContext
