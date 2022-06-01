import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductsList = ({ animalList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div >
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {animalList.filter((animal)=> {
        if (searchTerm === "") {
          return animal;
        } else if (animal.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return animal;
        }
      })
      .map((animal, key) => {
        return (
          <div>
            <Link key={animal.id} to={`/animals/${animal.id}`}>
            <div >
              <img className="images" alt={animal.image} src={`/assets/ExoticAnimals/${animal.image}`} />
              <h3>{animal.name}</h3>
              <p>{animal.biome}</p>
              <p>{animal.type}</p>
              <p>{animal.difficulty}</p>
              <p>{animal.price}</p>
            </div>
          </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
