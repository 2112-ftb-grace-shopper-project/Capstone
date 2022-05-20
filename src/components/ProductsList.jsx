import React from 'react'

const ProductsList = () => {

  const testAnimals =[
    {
      name: "Zebra",
      id: 100,
      biome: "savannah",
      type: "mammal",
      description: "neigh",
      careinstructions: "enter in kentucky derby",
      diet: "herbivore",
      age: 4,
      difficulty: "easy",
      price: 4000,
      image: `document.getElementById('id01gorillaphant').src="assets/ExoticAnimals/id01gorillaphant.jpg"`
    },
    {
      name: "Ostrich",
      id: 101,
      biome: "savannah",
      type: "bird",
      description: "angry as hell",
      careinstructions: "definitely enter in kentucky derby instead of zebra",
      diet: "carnivore",
      age: 5,
      difficulty: "hard",
      price: 2500,
      image: ""
    },
    {
      name: "Orca",
      id: 102,
      biome: "ocean",
      type: "mammal",
      description: "probably the most ferocious predators in the ocean",
      careinstructions: "don't be a sea lion taking a nap",
      diet: "carnivore",
      age: 6,
      difficulty: "hard",
      price: 10000,
      image: ""
    },
    {
      name: "Salamander",
      id: 103,
      biome: "pond",
      type: "amphibian",
      description: "slimey yet satisffying",
      careinstructions: "don't be a sea lion taking a nap",
      diet: "carnivore",
      age: 2,
      difficulty: "easy",
      price: 600,
      image: ""
    },
  ]
  return (
    <div>
      {testAnimals.map((animal) => (
        <div key={animal.id}>
          <p>{animal.image}</p>
          <h3>{animal.name}</h3>
          <p>{animal.biome}</p>
          <p>{animal.type}</p>
          <p>{animal.difficulty}</p> 
          <p>{animal.price}</p>
        </div>
      ))}
    </div>
    //list of all products on store
    //filters by type, diet, biome, price, alphabetized(?), caredifficulty
    //search bar
    //available to registered or unregisted users
  )
}

export default ProductsList