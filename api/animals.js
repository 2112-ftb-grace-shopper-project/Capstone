const express = require('express');
const animalsRouter = express.Router();
const { getAllAnimals } =require('../db');
const { getAnimalsById } = require('../db');

animalsRouter.get('/', async (req, res, next) => {
    const animals = await getAllAnimals();
    res.send(animals);
})

animalsRouter.get('/animals/:animalId', async (req, res, next) => {
    const { animalId } = req.params;
    const animal = await getAnimalsById(animalId);
    res.send(animal);
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