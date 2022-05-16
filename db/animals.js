const client = require("./client");

async function createAnimals({
  id,
  name,
  biome,
  type,
  description,
  CareInstructions,
  diet,
  age,
  CareDifficulty,
  price,
}) {
  try {
    const {
      rows: [animal],
    } = await client.query(
      `
        INSERT INTO animals(id, name, biome, type, description, "CareInstructions", diet, age, "CareDifficulty", price)
        VALUES($1,$2,$3,$4, $5, $6, $7, $8, $9, $10)
        RETURNING *;
        `,
      [
        id,
        name,
        biome,
        type,
        description,
        CareInstructions,
        diet,
        age,
        CareDifficulty,
        price,
      ]
    );
    return animal;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllAnimals() {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM animals;
        `);
    console.log("These are all the animals", rows);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAnimalsById({ id }) {
  try {
    const {
      rows: [animal],
    } = await client.query(
      `
        SELECT *
         FROM animals;
         WHERE id=$1
         `,
      [id]
    );
    return animal;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateAnimal({ id, name, description }) {
  try {
    const {
      rows: [animal],
    } = await client.query(
      `
      UPDATE animals
      SET name = $1, description =$2
      WHERE id=$3
      RETURNING *;
    `,
      [name, description, id]
    );

    return animal;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createAnimals,
  getAllAnimals,
  getAnimalsById,
  updateAnimal,
};
