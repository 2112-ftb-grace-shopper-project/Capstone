const client = require("./client");
const { createUser, users, animals, createAnimals, orders, createOrders } = require("./index");

const { user } = require("pg/lib/defaults");

async function dropTables() {
  try {
    console.log("Building tables...");

    await client.query(`
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS animals;
    `);

    console.log("Tables has been dropped!");
  } catch (error) {
    console.log(" there is an error in the drop tables");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to build tables ...");

    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        "isAdmin" BOOLEAN DEFAULT false
      );

      CREATE TABLE animals (
        Name VARCHAR(255) NOT NULL,
        Id SERIAL PRIMARY KEY,
        Biome TEXT NOT NULL,
        Type TEXT NOT NULL,
        Description TEXT NOT NULL,
        "CareInstructions" TEXT NOT NULL,
        Diet TEXT NOT NULL,
        Age TEXT NOT NULL,
        "CareDifficulty" TEXT NOT NULL,
        Price TEXT NOT NULL
      );

      CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id),
        status varchar(255) NOT NULL,
        cart INT 
      );
    `);

    console.log("Tables has been created!");
  } catch (error) {
    console.log("there is a error in creating Tables");
  }
}

async function createInitialUsers() {
  console.log("Starting to create users...");
  try {
    await Promise.all(
      users.map(async (user) => {
        await createUser(user);
      })
    );

    // console.log(users);
    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function createInitialAnimals() {
  console.log("starting to make animals...");
  try {
    await Promise.all(
      animals.map(async (animal) => {
        await createAnimals(animal);
      })
    );

    // console.log(animals);
    console.log("Finished creating animals!");
  } catch (error) {
    console.error("Error creating animals!");
    throw error;
  }
}


async function createInitialOrders() {
  console.log("starting to make orders...");
  try {
    await Promise.all(
      orders.map(async(order) => {
        await createOrders(order);
      })
    );

      console.log(orders)
      console.log("Finished creating orders");
  } catch (error) {
    console.log("There is an issue with creating order table");
    throw error;
  }
}
async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialAnimals();
    await createInitialOrders();
    // drop tables in correct order

    // build tables in correct order
  } catch (error) {
    console.log("Error during rebuildDb");
    throw error;
  }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());
