import React from 'react'
import { products } from '~/data'
import { Product } from '..'
import { Container, ProductRow } from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Alexa/GW/Outubro/W44/FTV/DesktopHero_FTV_W44_1500x600._CB417999420_.jpg"
        alt="PromoHeader"
      />
      <ProductRow>
        {products.map(product => (
          <Product key={product.id} {...{ product }} />
        ))}
      </ProductRow>
    </Container>
  )
}

export default Main
