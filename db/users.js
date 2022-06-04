const client = require("./client");
const bcrypt = require("bcrypt");

async function createUser({ username, password, email }) {
  const SALT_COUNT = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);

  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(username, password, email)
      VALUES ($1, $2, $3)
      ON CONFLICT (username) DO NOTHING
      RETURNING *;
    `,
      [username, hashedPassword, email]
    );

    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM users;
    `);

    // console.log("get All users",rows)
    return rows;
  } catch (error) {
    throw error;
  }
}


async function getUser({ username, password }) {
  const user = await getUserByUsername(username);
  const hashedPassword = user.password;
  const passwordsMatch = await bcrypt.compare(password, hashedPassword);

  if (passwordsMatch) {
    delete user["password"];
    return user;
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE id = $1;
    `,
      [id]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
      [username]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM users
    WHERE email = $1;
    `,
      [email]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUser({ email, username }) {
  try {
      const user = await getUserById(id);
      const fields = {};

      if (!user) {
          return;
      }

      if (email) {
          fields.email = email;
      }

      if (username) {
          fields.username = username;
      }



      const setString = Object.keys(fields)
          .map((key, index) => `"${key}"=$${index + 1}`)
          .join(", ");

      if (setString.length === 0) {
          return;
      }

      const { rows: [updatedUsers] } = await client.query(`
    UPDATE users
    SET ${setString}
    WHERE id = ${id}
    RETURNING *;
  `, Object.values(fields));

      return updatedUsers;
  } catch (error) {
      console.error(error);
  }
}


async function deleteUser(id) {
  try {
    const {rows: [user]} = await client.query(`
      DELETE FROM users
      WHERE id=$1;
    `, [id]);

    return user;
  } catch (error) {
    throw error
  }
}


module.exports = {
  createUser,
  getAllUsers,
  getUser,
  getUserById,
  getUserByUsername,
  getUserByEmail,
  updateUser,
  deleteUser
};
