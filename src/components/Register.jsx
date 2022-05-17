import React, { useState } from 'react';

const Register = ({ setHoldToken }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const registerUser = async (event) => {
    event.preventDefault()
    if (newPassword !== passwordAgain){
        alert("Passwords don't match")
        return;
    }
    
    // const userSubmit = await newUser(newUsername, newPassword)
    console.log(userSubmit)
    setHoldToken(userSubmit.token)
};

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <label>Username</label>
        <input
          type="text"
          name="userName"
          required
          value={newUsername}
          onChange={(event) => setNewUsername(event.target.value)}
        ></input>

        <label>Password</label>
        <input
          type="text"
          min="8"
          required
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        ></input>

        <label>Re-Enter Password</label>
        <input
          type="text"
          min="8"
          required
          value={passwordAgain}
          onChange={(event) => setPasswordAgain(event.target.value)}
        ></input>

        <label>Register</label>
            <button type='submit'
            onClick={registerUser}
            >Submit</button>
      </div>
  )
}

export default Register

//should we have payment/contact/address info on users db?