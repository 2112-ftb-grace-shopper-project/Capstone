import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const links = [
    {
      key: "Home",
      route: "/",
      placeholder: "Home",
      shouldDisplay: true,
    },
    {
      key: "Login",
      route: "/Login",
      placeholder: "Login",
      shouldDisplay: true,
    },
    {
      key: "Register",
      route: "/Register",
      placeholder: "Register",
      shouldDisplay: true,
    },
    {
      key: "Cart",
      route: "/Cart",
      placeholder: "Cart",
      shouldDisplay: true,
    },
    {
      key: "Logout",
      route: "/Logout",
      placeholder: "Logout",
      shouldDisplay: true,
      onClick: () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
      },
    },
  ];

  return (
    <div className="Navbar">
      <Link className="NavTitle" to={"/"}>
        Exotic Animals R Us
      </Link>
      <div className="NavMenuItems">
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
                <Link className="NavLink" to={route} onClick={onClick}>
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
