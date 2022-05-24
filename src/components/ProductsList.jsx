import React from 'react'

const ProductsList = () => {

  const testAnimals = [
    {
      "name" : "Gorillaphant",
      "id" : 1,
      "biome" : "Savannah",
      "type" : "Mammal",
      "description" : "Half Gorilla, Half Elephant, same full price!",
      "CareInstructions" : "Do NOT challenge to fight. Do NOT make eye contact. Do NOT try to take its stick.",
      "diet" : "Omnivore",
      "age" : 8,
      "CareDifficulty" : "Hard",
      "price" : "$5000",
      "image" : "../assets/ExoticAnimals/id01gorillaphant.jpg"
    },
    {
      "name" : "Orangutans",
      "id" : 2,
      "biome" : "Forest",
      "type" : "Mammal",
      "description" : "Loveable orange boys, very fond of climbing trees and eating fruit. *Sunglasses sold separately*",
      "CareInstructions" : "A normal sized tree house with a tire swing should do the trick for space. Be sure to stay stocked up on bananas.",
      "diet" : "Omnivore",
      "age" : 10,
      "CareDifficulty" : "medium", 
      "price" : "$1000",
      "image" : "../assets/ExoticAnimals/id02orangutans"
    },
    {
      "name" : "Zebrafrog",
      "id" : 3,
      "biome" : "Forest",
      "type" : "Other",
      "description" : "This handsome guy can hang from any surface, and camouflages perfectly with a herd of zebras.",
      "CareInstructions" : "Prefers a dark, moist terrarium environment. Strongly prefers insects, but hay or savannah grass will work in a pinch.",
      "diet" : "carnivore",
      "age" : 4,
      "CareDifficulty" : "easy",
      "price" : "$50",
      "image" : "../assets/ExoticAnimals/id03zebrafrog"
    },
    {
      "name" : "Red Panda",
      "id" : 4,
      "biome" : "Forest",
      "type" : "Mammal",
      "description" : "cute little face and red coloring, bushy tail ",
      "CareInstructions" : "distant lover; feed him and give him space.",
      "diet" : "vegetarian carnivore; mostly bamboo but feel free to throw in a bug or two",
      "age" : "3",
      "CareDifficulty" : "easy",
      "price" : "$600",
      "image" : "../assets/ExoticAnimals/id04redpanda"
    },
    {
      "name" : "Stitch",
      "id" : 5,
      "biome" : "Hawaii",
      "type" : "Mammal",
      "description" : "An Originally illegally-made extraterrestrial life-form. Fond of high powered lasers,space-ships and surfboards. Indestructible,intelligent and abnoramally strong ",
      "CareInstructions" :"good luck",
      "diet" :"Loves SPAM",
      "age" : 626,
      "CareDifficulty" :"hard",
      "price" : "$2",
      "image" : "../assets/ExoticAnimals/id05stitch"
    },
  ]

  return (
    <div>
      {testAnimals.map((animal) => (
        <div key={animal.id}>
          {/* <img alt={animal.name} src={require(testAnimals.image)} /> */}
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