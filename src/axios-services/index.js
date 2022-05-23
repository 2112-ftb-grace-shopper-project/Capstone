import axios from "axios";

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

/* 
  export async function getUsers() {
    try {
      const { data: users } = await axios.get('/api/users')
      return users;
    } catch(err) {
      console.error(err)
    }
  }
*/

export async function getAPIHealth() {
  try {
    const { data } = await axios.get("/api/health");
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

export const accountLogin = async (user, pass) => {
  return await fetch(
    "https://exotic-animal-shop.herokuapp.com/api/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", result.users.username);
      localStorage.setItem("userId", result.users.id);
      return result.users.username;
    })
    .catch(console.error);
};

export const registerAccount = async (user, pass) => {
  return await fetch(
    "https://fast-plateau-20949.herokuapp.com/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", result.users.username);
      localStorage.setItem("userId", result.users.id);
      return result.users.username;
    })
    .catch(console.error);
};
