import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAnimals } from "../axios-services";

const ProductsList = () => {
  const [animalList, setAnimalList] = useState([])

  useEffect(() => {
    const fetchAnimals = () => {
      getAnimals()
      .then((result) => {
        setAnimalList(result)
      })
      .catch(console.error)
    }
    fetchAnimals()
  }, []);

  return (
    <div>
      {animalList.map((animal) => {
        return (
          <Link to={`/animals/${animal.id}`}>
            <div key={animal.id}>
              {/* <Product to={`animal.id`} /> */}
              {/* <img alt={animal.name} src={require("../../assets/ExoticAnimals" + animal.image)} /> */}
              <h3>{animal.name}</h3>
              <p>{animal.biome}</p>
              <p>{animal.type}</p>
              <p>{animal.difficulty}</p>
              <p>{animal.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
    //list of all products on store
    //filters by type, diet, biome, price, alphabetized(?), caredifficulty
    //search bar
    //available to registered or unregisted users
  );
};

export default ProductsList;