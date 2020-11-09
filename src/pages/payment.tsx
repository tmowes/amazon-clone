import { NextPage } from 'next'
import { Elements } from '@stripe/react-stripe-js'
import getStripe from '~/utils/getStripe'

import { Header, PaymentForm, SEO } from '~/components'
import { Container } from '~/styles/pages'

const Payment: NextPage = () => {
  return (
    <Container>
      <SEO title="Payment" />
      <Header />
      <Elements stripe={getStripe()}>
        <PaymentForm />
      </Elements>
    </Container>
  )
}

export default Payment
