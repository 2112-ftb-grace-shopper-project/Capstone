import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ loggedIn, cart, setCart }) => {
  const handleIncrease = (item) => {
    setCart((cart) =>
      cart.map((x) =>
        item.name === x.name ? { ...x, quantity: x.quantity + 1 } : x
      )
    );
  };

  const handleDecrease = (item) => {
    setCart((cart) =>
      cart.map((x) =>
        item.name === x.name
          ? { ...x, quantity: x.quantity - (x.quantity > 1 ? 1 : 0) }
          : x
      )
    );
  };

  const removeFromCart = (itemtoDelete) => {
    const newCart = cart.filter((item) => item !== itemtoDelete);
    setCart(newCart);
  };

  const handleCheckout = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <div>
      <h1>My Cart</h1>
      {console.log(cart)}
      {cart.map((item) => (
        <div key={item.name}>
          <img
            className="images"
            alt={item.image}
            src={`/assets/ExoticAnimals/${item.image}`}
          />
          <h3>{item.name}</h3>
          <button onClick={() => handleIncrease(item)}>+</button>
          <button onClick={() => handleDecrease(item)}>-</button>
          <p>
            {item.quantity} x ${item.price / 100}
          </p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      {cart.length !== 0 && (
        <div>
          <h3>Total (includes shipping+processing+tax): ${cartTotal / 100} </h3>
        </div>
      )}

      {cart.length === 0 ? <p>Add Something to your Cart</p> : null}

      {!loggedIn && cart.length !== 0 ? (
        <h3>
          Please{" "}
          <br />
          <Link to={"/Login"}>
            <button>login</button>
          </Link>{" "}
          <br />
          or{" "}
          <br />
          <Link to={"/Register"}>
            <button>create an account</button>
          </Link>{" "}
          <br />
          to complete checkout.
        </h3>
      ) : cart.length !== 0 ? (
        <Link to={"/Checkout"}>
          <button onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      ) : null}
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
  );
};

export default Cart;
