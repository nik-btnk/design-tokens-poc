import React, { createContext, useEffect } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

//Util
import products from '../../product-storage'

const CartContext = createContext()

function CartProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useLocalStorage(
    'selectedProducts',
    []
  )

  const [productsTotal, setProductsTotal] = useLocalStorage('productsTotal', 0)
  const [taxes, setTaxes] = useLocalStorage('taxes', 0)
  const [total, setTotal] = useLocalStorage('total', 0)

  const calcProductsTotal = () => {
    let total = 0
    selectedProducts.forEach((product) => {
      total += product.price * product.quantity
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

  useEffect(() => {
    calcProductsTotal()
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

    setSelectedProducts([
      ...selectedProducts,
      {
        ...newProduct,
        quantity: newProduct.quantity === 0 ? 1 : 0
      }
    ])
  }

  const removeProduct = (id) => {
    setSelectedProducts((old) => [
      ...old.filter((product) => product.id !== id)
    ])
  }

  const isSelected = (id) => {
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
      total = myProduct.price * myProduct.quantity
      return total
    }
  }

  const data = {
    selectedProducts,
    addProduct,
    removeProduct,
    isSelected,
    addQty,
    removeQty,
    calcProductTotal,
    productsTotal,
    taxes,
    total
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartProvider }
export default CartContext
