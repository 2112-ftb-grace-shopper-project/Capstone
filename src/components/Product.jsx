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
    localStorage.setItem("name", singleAnimal.name);
    localStorage.setItem("price", singleAnimal.price);
    localStorage.setItem("quantity", animalQuantity);
    //needs to be able to add more than one item
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
    <div key={singleAnimal.id}>
      <img
        className="images"
        alt={singleAnimal.image}
        src={`/assets/ExoticAnimals/${singleAnimal.image}`}
      />
      <h3>{singleAnimal.name}</h3>
      <p>{singleAnimal.biome}</p>
      <p>{singleAnimal.type}</p>
      <p>{singleAnimal.description}</p>
      <p>{singleAnimal.CareInstructions}</p>
      <p>{singleAnimal.age}</p>
      <p>{singleAnimal.diet}</p>
      <p>{singleAnimal.CareDifficulty}</p>
      <p>{singleAnimal.price}</p>
      <hr />
      <button onClick={handleIncrease}>+</button>
      <p>{animalQuantity}</p>
      <button onClick={handleDecrease}>-</button>
      <br />
      <button onClick={addToCart}>Add to Cart</button>

      {checkOutMsg ? (
        <div>
          <p>Added to Cart! <Link to={"/"}>Continue Shopping</Link> OR <Link to={"/cart"}>Proceed to Checkout</Link></p>
          
        </div>
      ) : null}
    </div>
  );
};

export default Product;
