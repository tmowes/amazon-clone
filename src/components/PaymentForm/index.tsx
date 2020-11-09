/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  FormEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { db } from '~/firebase'
import { getBasketTotal } from '~/hooks/reducer'
import { useStateValue } from '~/hooks/StateProvider'
import { Product } from '~/hooks/types'
import api from '~/services/api-config'
import { formatCurrency } from '~/utils'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import {
  Address,
  AddressContent,
  CARD_OPTIONS,
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
  const [{ basket, user }, dispatch] = useStateValue()
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState<string>('')
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState<string>()

  useEffect(() => {
    const getClientSecret = async () => {
      const { data } = await api.post(
        `/payment/create?total=${Math.round(getBasketTotal(basket) * 100)}`,
      )
      setClientSecret(data.clientSecret)
    }
    getClientSecret()
  }, [basket])

  const formattedCurrency = useMemo(() => {
    return formatCurrency(getBasketTotal(basket))
  }, [basket])

  const paymentSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    setProcessing(true)
    const cardElement = elements!.getElement(CardElement)
    if (stripe && clientSecret && cardElement) {
      const {
        error: paymentError,
        paymentIntent,
      } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement!,
        },
      })
      if (paymentError) {
        setError(paymentError.message ?? 'An unknown error occurred')
      } else if (paymentIntent) {
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          })
        setSucceeded(true)
        setError('')
        setProcessing(false)
        dispatch({
          type: 'EMPTY_BASKET',
        })
        replace('/orders')
      }
    }
  }

  const paymentChange = useCallback((event: any) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }, [])

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
            <Address>{user?.email}</Address>
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
              <CardElement options={CARD_OPTIONS} onChange={paymentChange} />
              <PriceContainer>
                {`Order Total: ${formattedCurrency} `}
              </PriceContainer>
              <PayButton
                type="submit"
                disabled={processing || disabled || succeeded}
              >
                <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
              </PayButton>
              {error && <p>{error}</p>}
            </form>
          </PaymentDetails>
        </Section>
      </Content>
    </Container>
  )
}

export default PaymentForm
