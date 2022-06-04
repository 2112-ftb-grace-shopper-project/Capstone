import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleAnimal } from "../axios-services";
import CartPopUp from './CartPopUp'

const Product = ({ cart, setCart, animalQuantity, setAnimalQuantity }) => {
  const { animalId } = useParams();
  const [singleAnimal, setSingleAnimal] = useState({});
  const [checkOutMsg, setCheckOutMsg] = useState(false);

  const handleIncrease = () => {
    setAnimalQuantity(animalQuantity + 1);
  };

  const handleDecrease = () => {
    setAnimalQuantity(animalQuantity - 1);
  };

  const addToCart = (product) => {

    const newItem = {
      name: product.name,
      quantity: animalQuantity,
      image: product.image,
      price: product.price
    }
    if (cart.includes(newItem.name)){
        alert("This animal is already in your cart!")
        return;
      }
    setCart([...cart, newItem])
    
    setAnimalQuantity(1)
    
    setCheckOutMsg(true);

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
        <CartPopUp />
      ) : null}
      
    </div>
  );
};

export default Product;
