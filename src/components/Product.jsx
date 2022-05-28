import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getSingleAnimal } from "../axios-services";

const Product = () => {
  const {animalId} = useParams()
  const [singleAnimal, setSingleAnimal] = useState({});
  const [animalQuantity, setAnimalQuantity] = useState(1);

  const handleIncrease = () => {
    setAnimalQuantity(animalQuantity + 1)
  }

  const handleDecrease = () => {
    setAnimalQuantity(animalQuantity - 1)
  }

  useEffect(() => {
    const fetchSingleAnimal = () => {
      getSingleAnimal(animalId) 
      .then((result) => {
        setSingleAnimal(result)
      })
      .catch(console.error)
    }
    fetchSingleAnimal()
  }, [animalId]);

  return (
    <div key={singleAnimal.id}>
      <img className="images" alt={singleAnimal.image} src={`/assets/ExoticAnimals/${singleAnimal.image}`} />
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
      <button>Add to Cart</button>
    </div>
  )
};

export default Product