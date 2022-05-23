import React, { useState } from 'react';
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
        navigate("/");
     } else {
       alert("Invalid Login, Try Again")
     }
    setUsername("");
    setPassword("");
    setLoggedIn(true);
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
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePassword}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;