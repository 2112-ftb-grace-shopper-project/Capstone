const client = require("./client");

async function addAnimalToOrder({ animalId, orderId, quantity }) {
    try {
        console.log({ animalId, orderId })
        const { rows: [newOrder] } = await client.query(`
      INSERT INTO animalOrders(
      "animalId", "orderId", quantity)
      VALUES ($1, $2, $3) 
      RETURNING *;
    `, [animalId, orderId, quantity]);
        return newOrder;
    } catch (error) {
        throw error;
    }
}

async function getAnimalOrderById(id) {
    try {
        const { rows: [animalOrder] } = await client.query(`
      SELECT * 
      FROM animalOrders
      WHERE id= $1
    `, [id]);
        return animalOrder;
    } catch (error) {
        throw error;
    }
}

async function updateAnimalOrders({ id }) {
    try {
        const order = await getAnimalOrderById(id);
        const fields = {};
        if (!order) {
            return;
        }
        const setString = Object.keys(fields).map((key, index) => `"${key}"=$${index + 1}`).join(", ");

        if (setString.length === 0) {
            return;
        }
        const { rows: [updatedOrder] } = await client.query(`
      UPDATE animalOrders
      SET ${setString}
      WHERE id = ${id}
      RETURNING *;
    `, Object.values(fields));
        return updatedOrder;
    } catch (error) {
        console.error(error);
    }
}

async function destroyAnimalOrder(id) {
    try {
        const { rows: [deleteAnimalOrder] } = await client.query(`
      DELETE 
      FROM animalOrders
      WHERE id=$1
      RETURNING *;
    `, [id]);
        return deleteAnimalOrder;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    addAnimalToOrder,
    getAnimalOrderById,
    updateAnimalOrders,
    destroyAnimalOrder
}