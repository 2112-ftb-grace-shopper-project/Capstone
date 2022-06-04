import React from 'react'
import { Link } from "react-router-dom";


const Cart = ({loggedIn, cart, setCart }) => {

  const handleIncrease = (item) => {
    setCart(cart => 
      cart.map((x) => 
      item.name === x.name ? {...x, quantity: x.quantity + 1} : x))
  };

  const handleDecrease = (item) => {
    setCart(cart => 
      cart.map((x) => 
      item.name === x.name ? {...x, quantity: x.quantity - (x.quantity >1 ? 1 : 0)} : x))
  };

  

  const removeFromCart = (itemtoDelete) => {
    const newCart = cart.filter((item)=>item !==itemtoDelete)
    setCart(newCart);

  };

    const cartTotal=cart.reduce((a, c) => a + c.price * c.quantity, 0)
  return (
    <div>
      <h1>My Cart</h1>
      {cart.map((item => (
        <div key={item.id}>
          <img className="images" alt={item.image} src={`/assets/ExoticAnimals/${item.image}`} />
          <h3>{item.name}</h3>
          <button onClick={()=>handleIncrease(item)}>+</button>
          <button onClick={()=>handleDecrease(item)}>-</button>
          <p>{item.quantity} x ${item.price}</p>
          <button onClick={()=>removeFromCart(item)}>Remove</button>
          
        </div>

      )))}
      {cart.length !== 0 && (
        <div>
          <h3>Total (includes shipping+processing+tax): {cartTotal} </h3>
        </div>
      )}
      

      


      {loggedIn 
      ?
      <p><Link to={"/Checkout"}>Proceed to Checkout</Link></p> //Link to Checkout.jsx
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