import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getSingleAnimal } from "../axios-services";

const Product = () => {

    const [singleAnimal, setSingleAnimal] = useState({});


    const {animalId} = useParams()
    console.log(animalId)

  useEffect(() => {
    const fetchSingleAnimal = () => {
     
      getSingleAnimal(animalId) 
      .then((result) => {
        console.log(result)
        setSingleAnimal(result)
      })
      .catch(console.error)
    }
    fetchSingleAnimal()
  }, [animalId]);

  return (
    <div>
      <h1>TEST WITH ANIMAL ID: {animalId}</h1>

      {/* <button onClick={handleDecrease}></button>
      <p>{item.animalQuantity}</p>
      <button onClick={handleIncrease}></button>

      <button>Add to Cart</button> */}

      {/* Adding x# of animals to cart    */}
            
    </div>
  )
}

export default Product