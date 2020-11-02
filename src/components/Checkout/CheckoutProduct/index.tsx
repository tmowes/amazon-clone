import React, { useCallback, useMemo } from 'react'
import { useStateValue } from '~/hooks/StateProvider'
import { formatCurrency } from '~/utils'
import {
  Code,
  Container,
  Content,
  Image,
  Info,
  Price,
  Rating,
  RemoveFromBasket,
  SubInfo,
  Title,
} from './styles'
import { CheckoutProductProps } from './types'

const CheckoutProduct = ({ product }: CheckoutProductProps) => {
  const [, dispatch] = useStateValue()

  const { id, code, title, price, rating, image, alt } = product

  const formattedPrice = useMemo(() => {
    return formatCurrency(price)
  }, [])

  const formattedRating = useMemo(() => {
    return Array(rating).fill(rating)
  }, [])

  const removeFromBasket = useCallback(() => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    })
  }, [dispatch])

  return (
    <Container>
      <Content>
        <Image src={image} alt={alt} />
        <Info>
          <Code>{code}</Code>
          <Title>{title}</Title>
          <SubInfo>
            <Price>{formattedPrice}</Price>
            <Rating>
              {formattedRating.map((_, i) => (
                <span role="img" aria-label="star" key={i}>
                  ⭐
                </span>
              ))}
            </Rating>
          </SubInfo>
          <RemoveFromBasket onClick={removeFromBasket}>
            Remove from Basket
          </RemoveFromBasket>
        </Info>
      </Content>
    </Container>
  )
}

export default CheckoutProduct
