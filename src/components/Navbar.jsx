import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const links = [
    {
      key: "Nav1",
      route: "/ROUTE", // FIX THIS
      placeholder: "ROUTE NAME", // FIX THIS
      shouldDisplay: true, // CHANGE TO loggedIn or !loggedIn
      onClick: () => { //  ONLY USE THIS FOR THE LOGOUT ROUTE
        localStorage.removeItem("token");
        setLoggedIn(false);
      },
    },
  ];

  return (
    <div className="Navbar">
      <Link className="NavTitle" to={"/"}>
        Fitness Tracker
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