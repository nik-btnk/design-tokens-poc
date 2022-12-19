import { useContext } from 'react'
import { BrandContext } from '../contexts/brandContext'

export const useBrandedUrl = (target) => {
  const { brand } = useContext(BrandContext)

  return `/${brand}/${target}`
}
