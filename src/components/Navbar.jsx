import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const links = [
    {
      key: "Cart",
      route: "/Cart",
      placeholder: "Cart",
      shouldDisplay: true,
    },
    {
      key: "MyOrders",
      route: "/myorders",
      placeholder: `${localStorage.getItem("username")}`,
      shouldDisplay: loggedIn,
    },
    {
      key: "Login",
      route: "/Login",
      placeholder: "Login",
      shouldDisplay: !loggedIn,
    },
    {
      key: "Register",
      route: "/Register",
      placeholder: "Register",
      shouldDisplay: !loggedIn,
    },
    {
      key: "Logout",
      route: "/Logout",
      placeholder: "Logout",
      shouldDisplay: loggedIn,
      onClick: () => {
        localStorage.clear();
        setLoggedIn(false);
      },
    },
  ];

  return (
    <div className="Navbar">
      <Link className="NavTitle" to={"/"}>
        <span aria-label="dragon emoji" alt="dragon emoji" role="img">🐲</span>Exotic Animals R Us<span aria-label="Copyrighted, registered, and trademarked" alt="Copyrighted, registered, and trademarked" role="img">©®™</span>
      </Link>
      <div className="NavLink">
        {links.map((link) => {
          const {
            key,
            route,
            placeholder,
            shouldDisplay,
            onClick = () => {},
          } = link;
          if (shouldDisplay) {
            return (
              <div key={key}>
                <Link to={route} onClick={onClick}>
                  {placeholder}
                </Link>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;
