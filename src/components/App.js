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

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

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
        <Route path="*" element={<ProductsList />} />
        <Route path="/Login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/Register" element={<Register setLoggedIn={setLoggedIn} />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/ProductsList" element={<ProductsList />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;