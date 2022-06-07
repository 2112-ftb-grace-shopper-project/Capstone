import React, { useState, useEffect } from 'react'
import { getSingleUser, getMyOrders } from '../axios-services';


const MyOrders = ({user, setMyOrderList, myOrderList}) => {
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("")

  useEffect(() => {
    //get the user, grab their id, pass into get my orders
    const fetchMyOrders = () => {
      const id = localStorage.getItem('id')
      getMyOrders(id)
      .then((result) => {
        setMyOrderList(result)
      })
      .catch(console.error)
    }
    fetchMyOrders()
  }, []);
  
  // useEffect(() => {
  //   const fetchAnimals = () => {
  //     getAnimals()
  //     .then((result) => {
  //       setAnimalList(result)
  //     })
  //     .catch(console.error)
  //   }
  //   fetchAnimals()
  // }, []);
  


  const handleEmail = (e) => {
    setNewEmail(e.target.value);
  }

  const handleUsername = (e) => {
    setNewUsername(e.target.value);
  };

  const submitAcctUpdate = async (e) => {
    // grab newUsername and/or newEmail from handlers above
    // send patch request to db


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
        {myOrderList ? 
        myOrderList.map((order)=> {
          return (
            <div>
              <p>Order #</p>{/* order.id */}
              <p>Order Status: {order.status}</p> 
              <p># of items ordered: {order.cart}</p>    
            </div>
          )

        })
        : 
        <p>You have not placed any orders yet.</p>}



        
      
        {/* grab username from local storage, match with user info from DB, then grab user's ID and map orders with that ID */}
    </div>
    //only available to logged in registered users
    //list of order #s, price, date ordered(?)
    //Cancellation/"Support"?
  )
}

export default MyOrders