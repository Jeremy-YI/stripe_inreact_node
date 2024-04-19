require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRET)

app.use(express.json())
app.use(cors())

// checkout api
app.post('/api/create-checkout-session', async (req, res) => {
  const { products } = req.body
  console.log(products)

  const lineItems = products.map((product) => ({
    price_data: {
      currency: 'AUD',
      product_data: {
        name: product.dish,
        images: [product.imgdata],
      },
      unit_amount: product.price * 100, // convert to cents
    },
    quantity: product.qnty,
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/sucess',
    cancel_url: 'http://localhost:3000/cancel',
  })

  res.json({ id: session.id })
})

app.listen(8080, () => {
  console.log('server start at http://localhost:8080')
})
