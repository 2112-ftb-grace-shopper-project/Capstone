import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountLogin } from '../axios-services';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitInformation = async (e) => {
    e.preventDefault();
    const response = await accountLogin(username, password)
    
    if (response) {
      setUsername("");
      setPassword("");
      setLoggedIn(true);
      navigate("/");
      //also need to add localstorage/state cart to user via db function
     } else {
       alert("Invalid Login, Try Again")
     }
    
  };

  return (
    <div className="Login">
      <h2 className="LoginTitle">Login</h2>
      <form onSubmit={submitInformation}>
        <input
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        ></input>
        <hr />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePassword}
        ></input>
        <hr />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;