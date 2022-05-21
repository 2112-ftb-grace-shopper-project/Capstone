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

module.exports = {
    createOrders
}