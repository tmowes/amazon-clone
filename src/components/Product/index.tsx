import React, { useCallback, useMemo } from 'react'
import { useStateValue } from '~/hooks/StateProvider'
import { formatCurrency } from '~/utils'
import {
  AddToBasket,
  Container,
  ProductCode,
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductSubInfo,
  ProductTitle,
} from './styles'
import { ProductProps } from './types'

const Product = ({ product }: ProductProps) => {
  const { id, code, title, price, rating, image, alt, location } = product
  const [, dispatch] = useStateValue()

  const formattedRating = useMemo(() => {
    return Array(rating).fill(rating)
  }, [])

  const addToBasket = useCallback(() => {
    // dispatch product to basket data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: { id, code, title, price, rating, image, alt, location },
    })
  }, [])

  const formattedPrice = useMemo(() => {
    return formatCurrency(price)
  }, [])

  return (
    <Container>
      <ProductInfo>
        <ProductCode>{code}</ProductCode>
        <ProductTitle>{title}</ProductTitle>
        <ProductSubInfo>
          <ProductPrice>{formattedPrice}</ProductPrice>
          <ProductRating>
            {formattedRating.map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                ⭐
              </span>
            ))}
          </ProductRating>
        </ProductSubInfo>
      </ProductInfo>
      <img src={image} alt={alt} />
      <AddToBasket onClick={addToBasket}>Add to Basket</AddToBasket>
    </Container>
  )
}

export default Product
