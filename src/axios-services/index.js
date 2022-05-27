export const accountLogin = (username, password) => {
  return fetch(
    "https://exotic-animal-shop.herokuapp.com/api/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", result.user.username);
      localStorage.setItem("userId", result.user.id);
      return result.user.username;
    })
    .catch(console.error);
};

export const registerAccount = (username, password, email) => {
  return fetch(
    "https://exotic-animal-shop.herokuapp.com/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", result.user.username);
      localStorage.setItem("userId", result.user.id);
      return result.user.username;
    })
    .catch(console.error);
};

export const getAnimals = () => {
  return fetch(
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

// export const getSingleAnimal = (id) => {
//   return fetch(
//     `https://exotic-animal-shop.herokuapp.com/api/animals/${id}`,
//     {
//       headers: {
//         "Content-Type": "application/json"
//       },
//     }
//   )
//     .then((response) => response.json())
//     .then((result) => {
//       return result;
//     })
//     .catch(console.error);
// };

export const getSingleAnimal = async (id) => {
  const url = `https://exotic-animal-shop.herokuapp.com/api/animals/${id}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.animals
};