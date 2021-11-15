import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/landing">Landing</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/recipe">Create Recipe</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
};

export default Navbar;
