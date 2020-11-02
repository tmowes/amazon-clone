import React from 'react'
import { Header, SEO } from '~/components'
import { Container } from '~/styles/pages'
import { LoginUseReducer } from '../hooks/AppProvider'

export default function Cart() {
  return (
    <Container>
      <SEO title="Cart" />
      <Header />
      <LoginUseReducer />
    </Container>
  )
}
