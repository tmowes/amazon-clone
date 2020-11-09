import cors from 'cors'
import express from 'express'
import * as functions from 'firebase-functions'
import Stripe from 'stripe'

const stripe = new Stripe(
  'sk_test_51HjBAPEdGIOVJoG3u0op88Pg160plyPjyivFQiU7XPePU0KjpzwlA2QSkfDWMDO9YzbDCbNvpIqzhkyQEu3jphPF00GT1fLIGc',
  {
    apiVersion: '2020-08-27',
    maxNetworkRetries: 2,
    timeout: 20 * 1000,
  },
)

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (_, response) => response.status(200).send('OK-05-11'))

app.post('/payment/create', async (request, response) => {
  const { total } = request.query

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(total),
    currency: 'brl',
  })

  return response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

exports.api = functions.https.onRequest(app)
