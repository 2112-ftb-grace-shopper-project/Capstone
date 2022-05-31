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
  MyOrders
 } from './'
import '../style/App.css';
import { getAnimals } from '../axios-services';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [animalList, setAnimalList] = useState([]);
  const [myOrderList, setMyOrderList] = useState([]);
  const [order, setOrder] = useState({})
  
  useEffect(() => {
    const fetchAnimals = () => {
      getAnimals()
      .then((result) => {
        setAnimalList(result)
      })
      .catch(console.error)
    }
    fetchAnimals()
    localStorage.setItem("cart", [])
  }, []);

  // useEffect(() => 
  // {
  //   const fetchUser = () => {
  //     let localUser = localStorage.getItem("username")
  //     getSingleUser(localUser)
  //     .then((result) => {
  //       console.log("new useEffect" + result)

  //     })
  //     .catch(console.error)
  //   }
  //   fetchUser()

  // })
  // useEffect(() => {
  //   const createOrder = () => {
  //     if (!order) {
  //       getNewOrder()
  //     }
  //   }
  // }, [order])
  // console.log(animalList)

  // useEffect(async () => {
  //   const animal = await getSingleAnimal(animal)
  //   const animalFind = animal.find(animal => animal.id === +animalId)
  //   return animalFind;

  // }, [setSingleAnimal(animalFind)])

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
        <Route path="/Cart" element={<Cart loggedIn={loggedIn} animalList={animalList}/>} />
        <Route path="myorders" element={<MyOrders myOrderList={myOrderList} setMyOrderList={setMyOrderList}/>} loggedIn={loggedIn} />
        {/* <Route path="/ProductsList" element={<ProductsList />} /> */}
        <Route path="/animals/:animalId" element={<Product />} />
        <Route path="/" element={<ProductsList animalList={animalList} />} />
      </Routes>
    </div>
  );
};

export default App;