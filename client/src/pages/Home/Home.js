import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getRecipes,
  filterByDiet,
  getTypesOfDiet,
  orderByName,
  orderByScoreLikes,
} from "../../actions/index";
import s from "./home.module.css";

// components
import Card from "../../components/Card/Card";
import Paginator from "../../components/Paginator/Paginator";
import SearchBar from "../../components/SearchBar/SearchBar";
import Navbar from "../../layout/Navbar/Navbar";
import Loading from "../../layout/Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);

  //Paginado:
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [orderName, setOrderName] = useState("");
  const [orderLike, setOrderLike] = useState("");

  useEffect(() => {
    dispatch(getRecipes());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypesOfDiet());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  function handleSelectTypeOfDiet(e) {
    e.preventDefault();
    dispatch(filterByDiet(e.target.value));
  }

  function handleSelectByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrderName("Order" + e.target.value);
  }

  function handleSelectByScore(e) {
    e.preventDefault();
    dispatch(orderByScoreLikes(e.target.value));
    setCurrentPage(1);
    setOrderLike("Order" + e.target.value);
  }

  return (
    <div>
      <Navbar />
      {allRecipes.length ? (
        <div className={s.home}>
          <SearchBar />
          <div className={s.showAll}>
            <button
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Show all recipes
            </button>
          </div>
          <div className={s.select}>
            <span className={s.span}>Order by Recipe Name</span>
            <select onChange={(n) => handleSelectByName(n)}>
              <option value="default">All</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
            <span className={s.span}>Order by Score</span>
            <select onChange={(s) => handleSelectByScore(s)}>
              <option value="All">All</option>
              <option value="Asc">Highest Score</option>
              <option value="Desc">Lowest Score</option>
            </select>
            <span className={s.span}>Filter by Type of diet</span>
            <select onChange={(e) => handleSelectTypeOfDiet(e)}>
              <option value="default">All Diets</option>
              {diets.map((diet) => (
                <option value={diet.name} key={diet.id}>
                  {diet.name}
                </option>
              ))}
            </select>
          </div>
          <div className={s.paginate}>
            <Paginator
              recipesPerPage={recipesPerPage}
              allRecipes={allRecipes.length}
              paginate={paginate}
            />
          </div>
          <div className={s.cards}>
            {currentRecipes?.map((recipe) => (
              <div key={recipe.id}>
                <Link to={"/home/" + recipe.id} className="linkCard">
                  <Card
                    title={recipe.title}
                    image={
                      recipe.image ? (
                        recipe.image
                      ) : (
                        <img
                          src="https://image.freepik.com/foto-gratis/fondo-alimentos-concepto-alimentos-varios-sabrosos-ingredientes-frescos-cocinar-ingredientes-italianos-comida-vista-arriba_1220-1493.jpg"
                          alt="Img not provided"
                        />
                      )
                    }
                    diets={
                      recipe.createdDb
                        ? recipe.diets.map((diet) => (
                            <p key={diet.name} className={s.dietsMap}>
                              {diet.name}
                            </p>
                          ))
                        : recipe.diets.map((d) => (
                            <p key={d} className={s.dietsMap}>
                              {d}
                            </p>
                          ))
                    }
                    vegetarian={
                      recipe.vegetarian === true ? (
                        <p className={s.dietsMap}>vegetarian</p>
                      ) : (
                        <p></p>
                      )
                    }
                    score={recipe.aggregateLikes}
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className={s.paginate}>
            <Paginator
              recipesPerPage={recipesPerPage}
              allRecipes={allRecipes.length}
              paginate={paginate}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
