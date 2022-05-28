
import React from "react";
import { Link } from "react-router-dom";

const ProductsList = ({ animalList }) => {


  return (
    <div>
      {animalList.map((animal) => {
        return (
          <Link key={animal.id} to={`/animals/${animal.id}`}>
            <div>
            {console.log(animalList)}
              <img alt={animal.image} src={`../../public/assets/ExoticAnimals/${animal.image}`} /> {/* ADD REQUIRE WHEN WORKING */}
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
  );
};

export default ProductsList;