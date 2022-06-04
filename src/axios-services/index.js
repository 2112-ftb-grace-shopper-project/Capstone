export const accountLogin = (username, password) => {
  return fetch(
    "/api/users/login",
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
    "/api/users/register",
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
    "/api/animals",
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

export const getSingleAnimal = (id) => {
  return fetch(
    `/api/animals/${id}`,
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




export const getNewOrder = (userId, status, cart) => {
  return fetch(
    "/api/orders",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        status: status,
        cart: cart
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      localStorage.getItem("userId", result.user.id);
      return result.orders.userId;
    })
    .catch(console.error);
};

export const getSingleUser = (username) => {
  return fetch(
    `/api/users/}`,
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

export const getMyOrders = (id) => {
  return fetch(
    `/api/orders/${id}`,
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