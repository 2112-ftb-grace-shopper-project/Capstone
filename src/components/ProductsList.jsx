import React, {useState} from "react";
import { Link } from "react-router-dom";

const ProductsList = ({ animalList, cart, setCart }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("")
 
  const clearSort = ()=> {
    const arr = animalList.sort(function(a, b) {
      const na = a.id
      const nb = b.id
      if (na < nb) {return -1}
      if (na > nb) {return 1}
      return 0
    })
    return arr
  }

  const handleClearSort = ()=> {
    const animals = clearSort()
    setName(animals.map((animal) => {
      return (
        <p>{animal.name}</p>
      )
    }))
    return animals
  }

  const priceSort = ()=> {
    const arr = animalList.sort(function(a, b) {
      const na = a.price
      const nb = b.price
      if (na < nb) {return -1}
      if (na > nb) {return 1}
      return 0
    })
    return arr
  }

  const handlePrice = ()=> {
    const animals = priceSort()
    setName(animals.map((animal) => {
      return (
        <p>{animal.price}</p>
      )
    }))
    return animals
  }

  const nameSort = ()=> {
    const nameArr = animalList.sort(function(a, b) {
      const na = a.name.toLowerCase()
      const nb = b.name.toLowerCase()
      if (na < nb) {return -1}
      if (na > nb) {return 1}
      return 0
    })
    return nameArr
  }

  const handleName = ()=> {
    const animals = nameSort()
    setName(animals.map((animal) => {
      return (
        <p>{animal.name}</p>
      )
    }))
    return animals
  }

  const difficultySort = ()=> {
    const difficultyArr = animalList.sort(function(a, b) {
      const difficulty1 = a.CareDifficulty
      const difficulty2 = b.CareDifficulty
      console.log("difficulty1 is "+ difficulty1)
      if (difficulty1 ==="easy" && difficulty2 ==="medium" ) {return 1}
      if (difficulty1 ==="medium" && difficulty2 ==="hard") {return 2}
      if (difficulty1 === "hard" && difficulty2 === "easy") return 0
    })
    return difficultyArr
  }

  const handleDifficulty = ()=> {
    const animals = difficultySort()
    setDifficulty(animals.map((animal) => {
      return (
        <p>{animal.CareDifficulty}</p>
      )
    }))
    return animals
  }

  return (
     <>
      <div>
        <p>Sort by:</p>
        {/* Product Sort
            Sort by:
                -name (X)
                -price low to high (X)
                -price high to low 
                -care difficulty low to high (X)
                -care difficulty high to low (X)*/}
        <button onClick={handleClearSort}>None</button>
        <button onClick={handleName}>Name</button>
        <button onClick={handlePrice}>Price (Low to High)</button>
        <button onClick={handleDifficulty}>Difficulty (Easy to Hard)</button>
      </div>
      
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <div className="ProductsList">        
          {animalList.filter((animal)=> {
          if (searchTerm === "") {
            return animal;
          } else if (animal.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return animal;
          }
        })
        .map((animal) => {
          return (
            <Link key={animal.id} to={`/animals/${animal.id}`}>
              <div className="ProductsInList">
                <img className="images" alt={animal.image} src={`/assets/ExoticAnimals/${animal.image}`} />
                <h3>{animal.name}</h3>
                <p>Biome Type: <br /> {animal.biome}</p>
                <p>Animal Type: <br /> {animal.type}</p>
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
    </>
  );
};

export default ProductsList;