import React from "react";

import s from "./paginator.module.css";

export default function Paginator({ recipesPerPage, allRecipes, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={s.btnPag}>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
    </nav>
  );
}
