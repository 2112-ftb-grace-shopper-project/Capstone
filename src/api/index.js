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
      return result.user.username;
    })
    .catch(console.error);
  };

  