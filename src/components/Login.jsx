import React, { useState } from 'react';

const Login = ({ loggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const logInUser = async (event) => {
    event.preventDefault();
    // const userSubmit = await logIn(username, password);
    if (userSubmit.token) {
      setIsLoggedIn(true);
    } else {
      console.error("Unable to Login");
      setErrorMessages([
        ...errorMessages,
        "Username or Password is incorrect. Please try again.",
      ]);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setLoggedIn(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {loggedIn ? (
        <>
          <h3>Log Out</h3>
          <button onClick={logOut}>Log Out</button>
        </>
      ) : (
        <>
          <h3>Log In</h3>
          <input
            placeholder="Username*"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <input
            placeholder="Password*"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button onClick={logInUser}>Log In</button>
          {errorMessages.length ? errorMessages.map((error) => error) : null}
        </>
      )}
    </div>
  )
}

export default Login