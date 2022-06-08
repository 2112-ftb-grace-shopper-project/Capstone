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
                    alt={animal.image}
                    src={`/assets/ExoticAnimals/${animal.image}`}
                  />
                  <div className="ProductItems">
                  <h3><u>{animal.name}</u></h3>
                  <p>
                    <strong>Biome Type</strong> <br /> {animal.biome}
                  </p>
                  <p>
                    <strong>Animal Type</strong> <br /> {animal.type}
                  </p>
                  <p>
                    <strong>Care Difficulty</strong> <br /> {animal.CareDifficulty}
                  </p>
                  <p><strong>${animal.price/100}</strong></p>
                </div>
                <div className="ProdListAniDesc">
                  <p>{animal.description}</p>
                </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ProductsList;
