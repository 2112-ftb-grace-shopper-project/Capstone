const express = require('express');
const animalsRouter = express.Router();
const { getAllAnimals } =require('../db');

animalsRouter.get('/', async (req, res, next) => {
    const animals = await getAllAnimals();

    res.send(animals);
})

module.exports = animalsRouter