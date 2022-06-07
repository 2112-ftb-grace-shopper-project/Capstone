import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { 
  Navbar,
  Login,
  Logout,
  Register,
  ProductsList,
  Product,
  Cart,
  MyOrders,
  Checkout
 } from './'
import '../style/App.css';
// import StripeCheckout from 'react-stripe-checkout';
import { getAnimals, } from '../axios-services';

const localStorageCart = JSON.parse(localStorage.getItem("cart") || "[]")

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [animalList, setAnimalList] = useState([]);
  const [myOrderList, setMyOrderList] = useState([]);
  const [cart, setCart] = useState(localStorageCart)
  const [animalQuantity, setAnimalQuantity] = useState(1);
  
  useEffect(() => {
    const fetchAnimals = () => {
      getAnimals()
      .then((result) => {
        setAnimalList(result)
      })
      .catch(console.error)
    }
    fetchAnimals()
  }, []);

  useEffect(()=> {
   localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect (() => {
    const token = localStorage.getItem("token")
    if (token) {
      setLoggedIn(true)
    }
  }, [])

  return (
    <div className="app-container">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/Login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/Register" element={<Register setLoggedIn={setLoggedIn} />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Cart" element={<Cart loggedIn={loggedIn} cart={cart} setCart={setCart} animalQuantity={animalQuantity} setAnimalQuantity={setAnimalQuantity}/>} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="myorders" element={<MyOrders myOrderList={myOrderList} setMyOrderList={setMyOrderList}/>} loggedIn={loggedIn} />
        {/* <Route path="/ProductsList" element={<ProductsList />} /> */}
        <Route path="/animals/:animalId" element={<Product cart={cart} setCart={setCart} animalQuantity={animalQuantity} setAnimalQuantity={setAnimalQuantity}/>} />
        <Route path="/" element={<ProductsList animalList={animalList} cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
};

export default App;