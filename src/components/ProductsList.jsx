import React from "react";
import { Link } from "react-router-dom";

const ProductsList = ({ animalList }) => {


  return (
    <div className="ProductsList">
      {animalList.map((animal) => {
        return (
          <Link key={animal.id} to={`/animals/${animal.id}`}>
            <div className="ProductsInList">
              <img className="images" alt={animal.image} src={`/assets/ExoticAnimals/${animal.image}`} />
              <h3>{animal.name}</h3>
              <p>Biome Type: <br /> {animal.biome}</p>
              <p>Animal Typ:e <br /> {animal.type}</p>
              <p>Care Difficulty: <br /> {animal.CareDifficulty}</p>
              <p>{animal.price}</p>
            </div>
              <div className="ProdListAniDesc">
                <p>{animal.description}</p>
              </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;