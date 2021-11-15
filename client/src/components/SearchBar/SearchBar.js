import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipe } from "../../actions/index";

import s from "./searchBar.module.css";
// import "../styles/SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameRecipe(name));
    setName("");
  }

  return (
    <div className={s.searchBar}>
      <input
        className={s.input}
        type="text"
        value={name}
        placeholder="Search recipe..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)} className={s.btn}>
        <span>search</span>
      </button>
    </div>
  );
}
