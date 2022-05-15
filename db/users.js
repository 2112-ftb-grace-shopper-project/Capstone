const client = require ("./client");
const bcrypt = require("bcrypt");

async function createUser({username, password, email}){
  const SALT_COUNT = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
    
  try {
    const { rows: [ user ] } = await client.query(`
      INSERT INTO users(username, password, email)
      VALUES ($1, $2, $3)
      ON CONFLICT (username) DO NOTHING
      RETURNING *;
    `, [username, hashedPassword, email]);

    delete user.password;
    return user;
  } catch (error){
    throw error;
  }
};

async function getUser({ username, password }) {
  const user = await getUserByUsername(username);
  const hashedPassword = user.password;
  const passwordsMatch = await bcrypt.compare(password, hashedPassword);

  if (passwordsMatch) {
    delete user["password"];
    return user;
  } 
}


module.exports = {
    createUser,
    getUser
  };