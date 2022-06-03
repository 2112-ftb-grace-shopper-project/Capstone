import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleAnimal } from "../axios-services";

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
        <p>
          Biome Type <hr /> {singleAnimal.biome}
        </p>
        <br />
        <p>
          Animal Type <hr /> {singleAnimal.type}
        </p>
        <br />
        <p>
          Description <hr /> {singleAnimal.description}
        </p>
        <br />
        <p>
          How to Handle <hr /> {singleAnimal.CareInstructions}
        </p>
        <br />
        <p>
          Age <hr /> {singleAnimal.age}
        </p>
        <br />
        <h5>
          Dietary Restrictions <hr /> {singleAnimal.diet}
        </h5>
        <br />
        <h5>
          Care Difficulty <hr /> {singleAnimal.CareDifficulty}
        </h5>
        <br />
        <h3>TOTAL: ${singleAnimal.price}</h3>
        <br />
        <hr></hr>
        <p>How Many Would You Like to Add</p>
        <button onClick={handleIncrease}>+</button>
        <p>{animalQuantity}</p>
        <button onClick={handleDecrease}>-</button>
        <br />
        <hr></hr>
        <button onClick={() => addToCart(singleAnimal)}>Add to Cart </button>
      </div>

      {checkOutMsg ? (
        <div className="CartAddPopUp">
          <h4>You've Added an Item to your Cart!</h4>
          <p>
            <Link to={"/"}>Click Here to Continue Shopping</Link>
          </p>
          <p>
            <Link to={"/cart"}>
              Click Here to Proceed to Checkout ({cart.length})
            </Link>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
