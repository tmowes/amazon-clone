import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51HjBAPEdGIOVJoG3zzzbmt0HNJaA0z25QjZDiQiOKXiZuz7n8bqP44BHMeatJJviyARGtWwTA8ZD1taW5CHEY3kj00MPajatOB',
    )
  }
  return stripePromise
}

export default getStripe
