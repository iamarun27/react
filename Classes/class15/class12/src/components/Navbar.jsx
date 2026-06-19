import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "yellow",
        })}
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Navbar;
