import React from "react";
import { Link } from "react-router-dom";

const CartPopUp = () => {
  return (
    <div className="CartAddPopUp">
      <div
        style={{
          backgroundColor: "lightgrey",
          padding: "32px"
        }}
      >
        <p>
          <strong>You've Added an Item to your Cart!</strong>
        </p>
        <Link to={"/"}>Click Here to Continue Shopping</Link>
        <br />
        <Link to={"/cart"}>Click Here to Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default CartPopUp;
