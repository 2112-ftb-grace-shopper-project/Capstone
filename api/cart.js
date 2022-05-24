const express = require('express');
const cartRouter = express.Router();
const { getAllOrders } =require('../db');


cartRouter.get('/', async (req, res, next) => {
    const cart = await getAllOrders();

    res.send(cart);
})





module.exports = cartRouter