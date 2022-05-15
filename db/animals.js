const client = require("./client");

async function createAnimals
({
    id,
    name,
    biome, 
    type,
    description,
    CareInstructions,
    diet,
    age,
    CareDifficulty,
    price
}) {

    try {
        const {rows: [animal]} = await client.query(`
        INSERT INTO animals(id, name, biome, type, description, "CareInstructions", diet, age, "CareDifficulty", price)
        VALUES($1,$2,$3,$4, $5, $6, $7, $8, $9, $10)
        RETURNING *;
        `,
        [id, name, biome, type, description, CareInstructions, diet, age, CareDifficulty, price]);
        return animal;
   
    }catch (error){
        console.error(error);
        throw error;
    }
}



module.exports = {
    createAnimals,
}