import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";
import logotipo from "../../img/logotipo.jpg";

const Navbar = () => {
  return (
    <nav className={s.container_nav}>
      <NavLink className={s.link} to="/">
        <img className={s.img_logotipo} src={logotipo} alt="img logo" />
      </NavLink>
      <NavLink activeClassName="selected" className={s.link} to="/home">
        Home
      </NavLink>
      <NavLink className={s.link} to="/recipe">
        Create Recipe
      </NavLink>
      <NavLink className={s.link} to="/contacto">
        Contacto
      </NavLink>
    </nav>
  );
};

export default Navbar;
