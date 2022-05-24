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

export const animals = async () => {
  return await fetch(
    "https://exotic-animal-shop.herokuapp.com/api/animals",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch(console.error);
};
