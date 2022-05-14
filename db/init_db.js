const client = require('./client');

async function dropTables() {
  try {
    console.log('Building tables...');

    await client.query(`
      DROP TABLE IF EXISTS users;
    `);
    
    console.log("Tables has been dropped!")
  } catch (error) {
    console.log(" there is an error in the drop tables")
    throw (error)
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
        email VARCHAR(255) NOT NULL,
        isAdmin BOOLEAN DEFAULT false
      );
    `)

    console.log("Tables has been created!")
  } catch (error) {
    console.log("there is a error in creating Tables")
  }
}


async function createInitialUsers() {
  console.log("Starting to create users...");
  try {
    const usersToCreate = [
      { username: "albert", password: "bertie99", email: "dsab@gmail.com" },
      { username: "sandra", password: "sandra123", email: "ab@gmail.com" },
      { username: "glamgal", password: "glamgal123", email: "glamgal@gmail.com"},
    ];
    const users = await Promise.all(usersToCreate.map(createUser));
    
    console.log("Users created:");
    console.log(users);
    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}


async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
    // drop tables in correct order

    // build tables in correct order
  } catch (error) {
    console.log("Error during rebuildDb")
    throw error;
  }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());
