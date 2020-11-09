import { NextPage } from 'next'
import React from 'react'
import { Header, OrderList, SEO } from '~/components'
import { Container } from '~/styles/pages'

const Orders: NextPage = () => {
  return (
    <Container>
      <SEO title="Orders" />
      <Header />
      <OrderList />
    </Container>
  )
}

export default Orders
