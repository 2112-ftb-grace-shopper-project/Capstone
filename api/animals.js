const express = require('express');
const animalsRouter = express.Router();
const { getAllAnimals, createAnimals } = require('../db');

animalsRouter.get('/', async (req, res, next) => {
    const animals = await getAllAnimals();

    res.send(animals);
})

animalsRouter.post('/', async (req, res, next) => {
    const { name, biome, type, description, careInstructions, diet, age, careDifficulty, price } = req.body;
    try {
        const newAnimal = await createAnimals({ name, biome, type, description, careInstructions, diet, age, careDifficulty, price });
        res.send(newAnimal);
    } catch ({ name, message }) {
        next({ name, message });
    }
})

module.exports = animalsRouter