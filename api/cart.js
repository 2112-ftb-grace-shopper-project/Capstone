const express = require('express');
const cartRouter = express.Router();
const { requireUser } = require("./utils");
const { getAllOrders, createOrders, destroyOrder } = require('../db');


cartRouter.get('/', async (req, res, next) => {
    const cart = await getAllOrders();

    res.send(cart);
})

cartRouter.post('/', async (req, res, next) => {
    const { id, status, cart } = req.body;
    try {
        const order = await createOrders({
            id, status, cart
        });
        res.send(order);
    } catch (error) {
        next(error);
    }
});

cartRouter.patch("/:orderId", requireUser, async (req, res, next) => {
    try {
        const { orderId } = req.params;
        const { status, cart } = req.body;
        const update = await updateOrders({ id: orderId, status, cart });

        res.send(update);
    } catch (error) {
        next(error);
    }
});

cartRouter.delete("/:orderId", requireUser, async (req, res, next) => {
    try {
        const { orderId } = req.params;
        const deleteOrder = await destroyOrder(orderId);
        res.send(deleteOrder);
    } catch (error) {
        next(error);
    }
});

module.exports = cartRouter