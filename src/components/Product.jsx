import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleAnimal } from "../axios-services";

const Product = () => {
  const { animalId } = useParams();
  const [singleAnimal, setSingleAnimal] = useState({});
  const [animalQuantity, setAnimalQuantity] = useState(1);
  const [checkOutMsg, setCheckOutMsg] = useState(false);

  const handleIncrease = () => {
    setAnimalQuantity(animalQuantity + 1);
  };

  const handleDecrease = () => {
    setAnimalQuantity(animalQuantity - 1);
  };

  const addToCart = (e) => {
    e.preventDefault();
    let currentCart = localStorage.getItem("cart", []) || [];
    let name = singleAnimal.name;
    let price = singleAnimal.price;
    let quant = animalQuantity;
    let newItem = {
      name: name,
      price: price,
      quant: quant
    };
    let newItemString = JSON.stringify(newItem);
    currentCart.push(newItemString);
    setCheckOutMsg(true);
    console.log(localStorage);
  };

  useEffect(() => {
    const fetchSingleAnimal = () => {
      getSingleAnimal(animalId)
        .then((result) => {
          setSingleAnimal(result);
        })
        .catch(console.error);
    };
    fetchSingleAnimal();
  }, [animalId]);

  return (
    <div className="ProductsInList" key={singleAnimal.id}>
      <img
        className="SingleImages"
        alt={singleAnimal.image}
        src={`/assets/ExoticAnimals/${singleAnimal.image}`}
      />
      <div className="SingleAnimalInfo">
      <h3>{singleAnimal.name}</h3>
      <p>Biome Type <hr /> {singleAnimal.biome}</p>
      <br />
      <p>Animal Type <hr /> {singleAnimal.type}</p>
      <br />
      <p>Description <hr /> {singleAnimal.description}</p>
      <br />
      <p>How to Handle <hr /> {singleAnimal.CareInstructions}</p>
      <br />
      <p>Age <hr /> {singleAnimal.age}</p>
      <br />
      <h5>Dietary Restrictions <hr /> {singleAnimal.diet}</h5>
      <br />
      <h5>Care Difficulty <hr /> {singleAnimal.CareDifficulty}</h5>
      <br />
      <h3>TOTAL: {singleAnimal.price} (+tax, shipping, and handling)</h3>
      <br />
      <hr></hr>
      <p>How Many Would You Like to Add</p>
      <button onClick={handleIncrease}>+</button>
      <p>{animalQuantity}</p>
      <button onClick={handleDecrease}>-</button>
      <br />
      <hr></hr>
      <button onClick={addToCart}>Add to Cart</button>
      </div>

      {checkOutMsg ? (
        <div className="CartAddPopUp">
          <h4>You've Added an Item to your Cart!</h4>
          <p>
            <Link to={"/"}>Click Here to Continue Shopping</Link> 
          </p>
          <p>
            <Link to={"/cart"}>Click Here to Proceed to Checkout</Link>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Product;