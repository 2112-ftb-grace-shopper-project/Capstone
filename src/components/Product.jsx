import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    if (cart.some(e => e.name === product.name)){
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
      <h3>TOTAL: {singleAnimal.price/100} (+tax, shipping, and handling)</h3>
      <p>Quantity</p>
      <button onClick={handleIncrease}>+</button>
      <p>{animalQuantity}</p>
      <button onClick={handleDecrease}>-</button>
      <button onClick={()=>addToCart(singleAnimal)}>Add to Cart</button>
      </div>
      {checkOutMsg ? (
        <CartPopUp cart={cart} />
      ) : null}
    </div>
  );
};

export default Product;
