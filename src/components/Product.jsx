import React from 'react'

const Product = () => {

  const testAnimal =
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
    }


  return (
    <div>
      <h1>{testAnimal.name}</h1>
      <p>{testAnimal.image}</p>
      <p>{testAnimal.price}</p>
      <p>{testAnimal.biome}</p>
      <p>{testAnimal.type}</p>
      <p>{testAnimal.description}</p>
      <p>{testAnimal.careinstructions}</p>
      <p>{testAnimal.diet}</p>
      <p>{testAnimal.age}</p>
      <p>{testAnimal.difficulty}</p>
      {/* Maybe add below to new component? maybe look at MUI components? */}
      <form>
        <label>Quantity: </label>
        <input type="text" name="Quantity" /> 
      </form>
      <button>Add To Cart</button>
    </div>

    //Display individual product info (pic, description, care, age, price, etc)
    //Input field for quantity to buy
    //currently in cart amt
    //Add to cart button
    //*Related animals/"Users also bought" ??
    //*Reviews/comments section
  )
}

export default Product