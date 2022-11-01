import generalData from '../../general-data'

export const filterProduct = (product, selected, priceRange) => {
  let filter = true

  //If the product contains allergy ingredient, filter it
  if (product.allergy !== null) {
    product.allergy.forEach((allergy) => {
      if (selected.includes(allergy.name)) filter = false
    })
  }

  //If the product doesn't belongs to selected category, filter it
  generalData.Category.forEach((category) => {
    if (selected.includes(category)) {
      if (!selected.includes(product.category)) filter = false
    }
  })

  //If the product doesn't contain nutrition fact, filter it
  generalData.Nutrition.forEach((nutrition) => {
    if (selected.includes(nutrition)) {
      if (!selected.includes(product.nutrition.name)) filter = false
    }
  })

  //If product price is not between price range, filter it
  if (product.price < priceRange[0] || product.price > priceRange[1])
    filter = false

  return filter
}
