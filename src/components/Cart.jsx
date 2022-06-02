import React, {useState} from 'react'
import { Link } from "react-router-dom";
import ProductsList from './ProductsList';

const Cart = ({loggedIn, animalList, cart, setCart }) => {
  


  const testCart = [
    {
      name: "Minion (yellow)",
      price: "100",
      quantity: 3,
      image: "id31minions.png"
    },
    {
      name: "giraffe",
      price: "4000",
      quantity: 2,
      image: "id29giraffe.png"
    }
  ]
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
      {/* {products.map((product => (
        <div>
          <img className="images" alt={product.image} src={`/assets/ExoticAnimals/${product.image}`} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
        </div>
      )))} */}


      {loggedIn 
      ?
      <button>Proceed to Checkout</button> //Link to Checkout.jsx
      : 
        <p>Please <Link to={"/Login"}>login</Link> or <Link to={"/Register"}>create an account</Link> to complete checkout. </p>
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