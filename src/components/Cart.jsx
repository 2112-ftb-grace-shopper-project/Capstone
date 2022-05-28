import React from 'react'

const Cart = () => {

  const testCart = 
  {
    animalName: "Tabby Cat",
    id: 1,
    animalId: 9,
    animalQuantity: 4,
    animalPrice: "$100",
    image: "/id09tabbyCat.png",
  }



  return (
    <div>
      {testCart.map((item) => {
        return (
          <>
            <img src={item.image} alt={item.animalId}/>
            <p>{item.name}</p>
            
            {/* <button onClick={handleDecrease}></button>
            <p>{item.animalQuantity}</p>
            <button onClick={handleIncrease}></button> */}
            
          </>
          
        )
      })}
    </div>

    //list of items in cart
      //include quantity, price, description
    //unregistered users can revisit cart on same device and see items (local storage)
    //edit cart
      //change quantity
      //remove item
      //only allow individual customer to edit
    //registered users can revisit cart on different device and see items in cart (needs backend user functionality)
    //total price of all items 
  )
}

export default Cart