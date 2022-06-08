import React, { useState } from 'react';
import { registerAccount } from '../axios-services';

const Register = ({ setLoggedIn }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

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
    if (newPassword.length < 8) {
      alert("Your Password needs to be at least 8 characters long")
    } else if (newPassword !== passwordAgain) {
      alert("Your Password did not match!")
    } else {
      const account = await registerAccount(newUsername, newPassword, email);
      setNewUsername("")
      setNewPassword("")
      setEmail("")
      setLoggedIn(true)
      return(account)
    };
  }

  return (
    <div className="Register">
      <h2>Register</h2>
      <br />
      <form onSubmit={submitInformation}>
      <input
          placeholder="E-Mail"
          value={email}
          onChange={handleEmail}
        ></input>
        <hr />
        <input
          placeholder="Username"
          value={newUsername}
          onChange={handleUsername}
        ></input>
        <hr />
        <input
          placeholder="Password"
          type="password"
          value={newPassword}
          onChange={handlePassword}
        ></input>
        <br />
        <input
          placeholder="Retype Your Password"
          type="password"
          value={passwordAgain}
          onChange={handlePasswordAgain}
        ></input>
        <hr />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register