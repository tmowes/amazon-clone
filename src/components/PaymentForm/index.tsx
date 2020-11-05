/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { getBasketTotal } from '~/hooks/reducer'
import { useStateValue } from '~/hooks/StateProvider'
import { Product } from '~/hooks/types'
import api from '~/services/api-config'
import { formatCurrency } from '~/utils'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import {
  Address,
  AddressContent,
  CheckoutTitle,
  Container,
  Content,
  OrdersItems,
  PayButton,
  PaymentDetails,
  PriceContainer,
  Section,
  Title,
} from './styles'

const PaymentForm: React.FC = () => {
  const { replace } = useRouter()
  const [{ basket, user }] = useStateValue()
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState<string>('')
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState<string>()

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const { data } = await api({
  //       method: 'POST',
  //       url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
  //     })
  //     setClientSecret(data.clientSecret)
  //   }
  //   getClientSecret()
  // }, [basket])

  useEffect(() => {
    const getClientSecret = async () => {
      const { data } = await api.post(
        `/payment/create?total=${getBasketTotal(basket) * 100}`,
      )
      setClientSecret(data.clientSecret)
    }
    getClientSecret()
  }, [basket])

  const formattedCurrency = useMemo(() => {
    return formatCurrency(getBasketTotal(basket))
  }, [basket])

  console.log('clientSecret', clientSecret)

  const paymentSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    if (stripe && elements && clientSecret) {
      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          if (paymentIntent) {
            setSucceeded(true)
            setError('')
            setProcessing(false)
            replace('/orders')
          }
        })
      console.log('payload', payload)
    }
  }, [])

  const paymentChange = useCallback(
    (event: any) => {
      setDisabled(event.empty)
      setError(event.error ? event.error.message : '')
    },
    [disabled, error],
  )

  return (
    <Container>
      <CheckoutTitle>
        Checkout
        <Link href="/checkout">{`( ${basket?.length} items)`}</Link>
      </CheckoutTitle>
      <Content>
        <Section>
          <Title>Delivery Address</Title>
          <AddressContent>
            <Address>{user}</Address>
            <Address>394, Botuverá</Address>
            <Address>Houston, TX</Address>
          </AddressContent>
        </Section>
        <Section>
          <Title>Review Items and Delivery Options</Title>
          <OrdersItems>
            {basket.map((product: Product, index: number) => (
              <CheckoutProduct key={product.id + index} {...{ product }} />
            ))}
          </OrdersItems>
        </Section>
        <Section>
          <Title>Payment Methods</Title>
          <PaymentDetails>
            <form onSubmit={paymentSubmit}>
              <CardElement onChange={paymentChange} />
              <PriceContainer>
                {`Order Total: ${formattedCurrency} `}
              </PriceContainer>
              <PayButton
                type="submit"
                disabled={processing || disabled || succeeded}
              >
                Pay
              </PayButton>
              {error && <p>{error}</p>}
              {clientSecret && <p>{clientSecret}</p>}
            </form>
          </PaymentDetails>
        </Section>
      </Content>
    </Container>
  )
}

export default PaymentForm
