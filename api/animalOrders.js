const express = require('express');
const animalOrdersRouter = express.Router();
const { requireUser } = require("./utils");
const { updateAnimalOrders, destroyAnimalOrder, getAnimalOrderById } = require('../db');

animalOrdersRouter.patch("/:animalOrderId", requireUser, async (req, res, next) => {
    try {


        const { animalOrderId } = req.params;
        const animalOrders = await getAnimalOrderById(animalOrderId);
        const order = await getOrderById(animalOrders.orderId);
        if (req.user.id === order.userId) {
            const update = await updateAnimalOrders({ id: animalOrderId });
            res.send(update);
        } else {
            next({
                name: "AnimalOrderFailedToUpdate",
                message: "You can't update, check for issues"
            });
        }
    } catch (error) {
        throw error;
    }
}
);
module.exports = animalOrdersRouter