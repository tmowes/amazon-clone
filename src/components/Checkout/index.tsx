import React from 'react'
import { useStateValue } from '~/hooks/StateProvider'
import { Product } from '~/hooks/types'
import CheckoutProduct from './CheckoutProduct'
import { CheckoutContainer, CheckoutTitle, Container } from './styles'
import SubTotal from './SubTotal'

const Checkout: React.FC = () => {
  const [{ basket }] = useStateValue()

  return (
    <Container>
      <CheckoutContainer>
        <SubTotal />
        <CheckoutTitle>Your shopping basket</CheckoutTitle>
        {basket.map((product: Product, index: number) => (
          <CheckoutProduct key={product.id + index} {...{ product }} />
        ))}
      </CheckoutContainer>
    </Container>
  )
}

export default Checkout
