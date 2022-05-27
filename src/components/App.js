import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { 
  Navbar,
  Login,
  Logout,
  Register,
  ProductsList,
  Product
 } from './'
import '../style/App.css';
import { getAnimals, getSingleAnimal } from '../axios-services';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [animalList, setAnimalList] = useState([]);
  // const [singleAnimal, setSingleAnimal] = useState({});
  
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
  // console.log(animalList)

  // useEffect(() => {
  //   const fetchSingleAnimal = () => {
  //     setSingleAnimal(animalList)
  //     console.log(animalList)
  //     getSingleAnimal(singleAnimal.animal.id) 
  //     .then((result) => {
  //       setSingleAnimal(result)
  //     })
  //     .catch(console.error)
  //   }
  //   fetchSingleAnimal()
  // }, [singleAnimal]);

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
        <Route path="*" element={<ProductsList animalList={animalList} />} />
        <Route path="/Login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/Register" element={<Register setLoggedIn={setLoggedIn} />} />
        <Route path="/Logout" element={<Logout />} />
        {/* <Route path="/ProductsList" element={<ProductsList />} /> */}
        <Route path="/animals/:animalId" element={<Product animalList={animalList} />} />
      </Routes>
    </div>
  );
};

export default App;