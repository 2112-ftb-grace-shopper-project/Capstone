import React from 'react'
import Login from './Login'
import { Link } from "react-router-dom";
import Register from './Register';

const Cart = ({loggedIn, animalList }) => {

  // const handleDecrease = () => {

  // }

  // const handleIncrease = () => {
    
  // }

  //grab everything we have added to the cart
    //quantity of each
    //quantity x base price = total price

    //single animal > cart (animalOrders) > checkout/finished order(orders)
    //animal order back end = connecting users+animals
    //front-end state to build
      //edit quantity
      //multiply+add for total prices

  return (
    <div>
      <h1>My Cart</h1>
      <p></p>
      {loggedIn 
      ? 
      <button>Proceed to Checkout</button> 
      : 
        <p>Please <Link to={Login}>login</Link> or <Link to={Register}>create an account</Link> to complete checkout. </p>
      }
      
    </div>

    //list of items in cart
      //include quantity, price, description
    //unregistered users can revisit cart on same device and see items (local storage)
    //edit cart
      //change quantity
      //remove item
      //only allow individual customer to edit
    //registered users can revisit cart on different device and see items in cart (needs backend user functionality)
    //total price of all items 
  )
}

export default Cart