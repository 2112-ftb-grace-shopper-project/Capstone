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

module.exports = animalsRouter