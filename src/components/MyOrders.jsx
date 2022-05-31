import React, { useState } from 'react'



const MyOrders = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("")

  const handleEmail = (e) => {
    setNewEmail(e.target.value);
  }

  const handleUsername = (e) => {
    setNewUsername(e.target.value);
  };

  const submitAcctUpdate = async (e) => {
    // e.preventDefault();
    // if (newPassword.length < 5) {
    //   alert("Your Password needs to be at least 6 characters long")
    // } else if (newPassword !== passwordAgain) {
    //   alert("Your Password did not match!")
    // } else {
    //   const account = await registerAccount(newUsername, newPassword, email);
    //   setNewUsername("")
    //   setNewPassword("")
    //   setEmail("")
    //   setLoggedIn(true)
    //   return(account)
    // };
  }

  return (
    <div>
      <label>Update Account Info</label>
      <form onSubmit={submitAcctUpdate}>
      <input
          placeholder="E-Mail"
          value={newEmail}
          onChange={handleEmail}
        ></input>
        <input
          placeholder="Username"
          value={newUsername}
          onChange={handleUsername}
        ></input>
        <button>Submit</button>
        </form>

        <label>My Orders</label>
        {/* grab username from local storage, match with user info from DB, then grab user's ID and map orders with that ID */}
    </div>
    //only available to logged in registered users
    //list of order #s, price, date ordered(?)
    //Cancellation/"Support"?
  )
}

export default MyOrders