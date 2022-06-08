import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sort from "./Sort";

const ProductsList = ({ animalList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  // const [difficulty, setDifficulty] = useState("");

  return (
    <div>
      <Sort
        name={name}
        setName={setName}
        animalList={animalList}
        // setDifficulty={setDifficulty}
        setSearchTerm={setSearchTerm}
      />
      <div className="ProductsList">
        {animalList.filter((animal) => {
            if (searchTerm === "") {
              return animal;
            } else if (
              animal.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return animal;
            }
          }).map((animal) => {
            return (
              <Link key={animal.id} to={`/animals/${animal.id}`}>
                <div className="ProductsInList">
                  <img
                    className="images"
                    alt={animal.image}
                    src={`/assets/ExoticAnimals/${animal.image}`}
                  />
                  <h3>{animal.name}</h3>
                  <p>
                    Biome Type: <br /> {animal.biome}
                  </p>
                  <p>
                    Animal Type: <br /> {animal.type}
                  </p>
                  <p>
                    Care Difficulty: <br /> {animal.CareDifficulty}
                  </p>
                  <p>${animal.price/100}</p>
                </div>
                <div className="ProdListAniDesc">
                  <p>{animal.description}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ProductsList;
