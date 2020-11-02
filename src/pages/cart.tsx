import React from 'react'
import { Checkout, Header, SEO } from '~/components'
import { Container } from '~/styles/pages'

export default function Cart() {
  return (
    <Container>
      <SEO title="Cart" />
      <Header />
      <Checkout />
    </Container>
  )
}
