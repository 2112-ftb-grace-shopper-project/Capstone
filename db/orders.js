const client = require("./client");

async function createOrders({
    userId,
    status,
    cart
}) {
    try {
        const { rows: [order] } = await client.query(`
        INSERT INTO orders( "userId", status, cart)
        VALUES($1, $2, $3)
        RETURNING *;  
          `, [userId, status, cart]);

        return order;
    } catch (error) {
        throw error
    }
}

async function getAllOrders() {
    try {
        const { rows } = await client.query(`
        SELECT *
        FROM orders;
        `)

        return rows;
    } catch (error) {
        throw error
    }
}

async function getOrdersById(id) {
    try {
        const { rows: [order] } = await client.query(`
      SELECT *
      FROM orders
      WHERE id =$1;
    `,
            [id]
        );

        return order;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getAllOrdersByUser({username}) {
    try {
        const user = await getUserByUsername(username);
        const { rows: order } = await client.query(`
            SELECT *
            FROM orders
            JOIN users ON orders."userId" = users.id
            WHERE "userId" = $1;
        `, [user.id]);

        const { rows: animals } = await client.query(`
            SELECT *
            FROM animalOrders
            JOIN animals ON animals.id = animalOrders."animalId";
        `);

        for(let i = 0; i < order.length; i++) {
            const currOrder = order[i];
            currOrder.animals = [];

            for (let j = 0; j < animals.length; j++) {
                if (currOrder.id === animals[j].orderId) {
                    currOrder.animals.push(animals[j]);
                }
            }
        }
        return order;
    } catch (error) {
        throw error;
    }
}

async function updateOrders({ id, status, cart }) {
    try {
        const order = await getOrdersById(id);
        const fields = {};

        if (!order) {
            return;
        }

        if (status) {
            fields.status = status;
        }

        if (cart) {
            fields.cart = cart;
        }



        const setString = Object.keys(fields)
            .map((key, index) => `"${key}"=$${index + 1}`)
            .join(", ");

        if (setString.length === 0) {
            return;
        }

        const { rows: [updatedOrders] } = await client.query(`
      UPDATE orders
      SET ${setString}
      WHERE id = ${id}
      RETURNING *;
    `, Object.values(fields));

        return updatedOrders;
    } catch (error) {
        console.error(error);
    }
}

async function destroyOrder(id) {
    try {
        console.log("id", id)

        const { rows } = await client.query(`
      DELETE
      FROM animalOrders
      WHERE "orderId" = $1
      RETURNING *;
    `, [id]);
        console.log("id", id)

        const { rows: [deleteOrder] } = await client.query(`
      DELETE 
      FROM orders
      WHERE id =$1
      RETURNING *;
    `, [id]);
        console.log("id", id);
        return deleteOrder;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    createOrders,
    getAllOrders,
    getOrdersById,
    updateOrders,
    destroyOrder,
    getAllOrdersByUser
}