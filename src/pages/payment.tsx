import { Elements } from '@stripe/react-stripe-js'
import { useMemo } from 'react'
import { Header, PaymentForm, SEO } from '~/components'
import { Container } from '~/styles/pages'
import getStripe from '~/utils/getStripe'

export default function Payment() {
  const stripePromise = useMemo(async () => {
    return getStripe()
  }, [])

  return (
    <Container>
      <SEO title="Payment" />
      <Header />
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </Container>
  )
}
