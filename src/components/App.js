import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { getAPIHealth } from '../axios-services';
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
  const [APIHealth, setAPIHealth] = useState('');

  useEffect (() => {
    const token = localStorage.getItem("token")
    if (token) {
      setLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? 'The API is Healthy' : 'The API is DOWN');
    };
    getAPIStatus();
  }, []);

  return (
    <div className="app-container">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <p>API Status: {APIHealth}</p>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/Login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="Register" element={<Register setLoggedIn={setLoggedIn} />} />
        <Route path="/Logout" element={<ProductsList />} />
        <Route path="/Logout" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
