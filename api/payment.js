const express = require('express');
const paymentRouter = express.Router();
const { getOrdersById, animals } = require("../db");
require('dotenv').config();

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

paymentRouter.post('/', async (req, res, next) => {
    //need to req.body info for cart here???
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = animals.get(animals.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: animalItem.name
                        },
                        unit_amount: animalItem.priceInCents
                    },
                    quantity: item.quantity
                }
            }), //this will change to be our orders
            success_url: `${process.env.SERVER_URL}/success.html`,
            cancel_url: `${process.env.SERVER_URL}/cancel.html`
        })
        res.json({ url: session.url })
    } catch (error) {
        console.error(error)
    }

})

module.exports = paymentRouter;