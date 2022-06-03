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
    //grab existing cart+add newItem
    //grab local cart (stored as string)
    // const currLocalCart = localStorage.getItem("cart") // ex: [] OR [{name: "stitch", quantity: 1, image: "img05stitch.png", price: $2 }]
    //parse from string to an array of objects
    // if (cart.includes(product.name)){
    //   alert("This animal is already in your cart!")
    //   return;
    // }
    // const parsedCart = JSON.parse(currLocalCart)
    //add new item to state cart
    // const newCart= [...parsedCart, newItem]
    
  
    //stringify new state cart back to localstorage
    // localStorage.setItem("cart", JSON.stringify(newCart))
    setAnimalQuantity(1)
    

    //to convert back to obj, result, then JSON.parse(result)


    //adding item to state cart
    // const exist = cart.find((x) => x.name === product.name);
    // if (exist) {
    //   setCart(
    //     cart.map((x) =>
    //       x.name === product.name
    //         ? { ...exist, quantity: exist.quantity + 1 }
    //         : x
    //     )
    //   );
    // } else {
    //   setCart([...cart, { ...product, quantity: 1 }]);
    // }


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
        <h3>TOTAL: {singleAnimal.price} (+tax, shipping, and handling)</h3>
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
