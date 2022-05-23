import React, { useState, useEffect } from 'react';
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
  // const [APIHealth, setAPIHealth] = useState('');

  useEffect (() => {
    const token = localStorage.getItem("token")
    if (token.length > 4) {
      setLoggedIn(true)
    }
  }, [])

  // useEffect(() => {
  //   // follow this pattern inside your useEffect calls:
  //   // first, create an async function that will wrap your axios service adapter
  //   // invoke the adapter, await the response, and set the data
  //   const getAPIStatus = async () => {
  //     const { healthy } = await getAPIHealth();
  //     setAPIHealth(healthy ? 'api is up! :D' : 'api is down :/');
  //   };

  //   // second, after you've defined your getter above
  //   // invoke it immediately after its declaration, inside the useEffect callback
  //   getAPIStatus();
  // }, []);

  return (
    <div className="app-container">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Logout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Register setLoggedIn={setLoggedIn} />
      <ProductsList /> 
      <Product />
      <h1>Hello, World!</h1>
      <p>API Status: {APIHealth}</p>
    </div>
  );
};

export default App;
