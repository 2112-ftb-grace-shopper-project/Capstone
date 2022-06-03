import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleAnimal } from "../axios-services";

const Product = ({cart, setCart}) => {
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

  const addToCart = (product) => {
    setCart([...cart, product])
    // e.preventDefault();
    // let currentCart = localStorage.getItem("cart", []) || [];
    // let name = singleAnimal.name;
    // let price = singleAnimal.price;
    // let quant = animalQuantity;
    // let newItem = {
    //   name: name,
    //   price: price,
    //   quant: quant
    // };
    // let newItemString = JSON.stringify(newItem);
    // currentCart.push(newItemString);
    // setCheckOutMsg(true);
    // console.log(localStorage);
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
      <p><strong>Biome Type</strong> <br /> {singleAnimal.biome}</p>
      <p><strong>Animal Type</strong> <br /> {singleAnimal.type}</p>
      <p><strong>Description</strong> <br /> {singleAnimal.description}</p>
      <p><strong>How to Handle</strong> <br /> {singleAnimal.CareInstructions}</p>
      <p><strong>Age</strong> <br /> {singleAnimal.age}</p>
      <p><strong>Dietary Restrictions</strong> <br /> {singleAnimal.diet}</p>
      <p><strong>Care Difficulty</strong> <br /> {singleAnimal.CareDifficulty}</p>
      <h3>TOTAL: {singleAnimal.price} (+tax, shipping, and handling)</h3>
      <br />
      <p>Quantity</p>
      <button onClick={handleIncrease}>+</button>
      <p>{animalQuantity}</p>
      <button onClick={handleDecrease}>-</button>
      <hr />
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