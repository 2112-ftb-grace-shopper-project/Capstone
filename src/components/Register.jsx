import React, { useState } from 'react';
import { registerAccount } from '../axios-services';

const Register = ({ setLoggedIn }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleUsername = (e) => {
    setNewUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handlePasswordAgain = (e) => {
    setPasswordAgain(e.target.value);
  };

  const submitInformation = async (e) => {
    e.preventDefault();
    if (newPassword.length < 5) {
      alert("Your Password needs to be at least 6 characters long")
    } else if (newPassword !== passwordAgain) {
      alert("Your Password did not match!")
    } else {
      const account = await registerAccount(newUsername, newPassword);
      setNewUsername("")
      setNewPassword("")
      setLoggedIn(true)
      return(account)
    };
  }

  return (
    <div className="Register">
      <h2>Register</h2>
      <form onSubmit={submitInformation}>
        <input
          placeholder="Username"
          value={newUsername}
          onChange={handleUsername}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={newPassword}
          onChange={handlePassword}
        ></input>
        <input
          placeholder="Retype Your Password"
          type="password"
          value={passwordAgain}
          onChange={handlePasswordAgain}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register