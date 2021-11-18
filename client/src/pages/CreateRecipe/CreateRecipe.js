import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postRecipe, getDiets } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import s from "./createRecipe.module.css";

import Navbar from "../../layout/Navbar/Navbar";
import Loading from "../../layout/Loading/Loading";

function validate(input) {
  let errors = {};
  input.title
    ? (errors.title = "")
    : (errors.title = "You must name the recipe");
  input.summary
    ? (errors.summary = "")
    : (errors.summary = "You must provide a summary");
  input.diets.length < 1
    ? (errors.diets = "Choose at least one diet")
    : (errors.diets = "");
  if (!input.image.includes("https://") && !input.image.includes("http://")) {
    errors.image = "This isn't a valid image address";
  } else {
    errors.image = "";
  }
  return errors;
}

export default function RecipeCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const [input, setInput] = useState({
    title: "",
    summary: "",
    aggregateLikes: 0,
    healthScore: 0,
    analyzedInstructions: "",
    image: "",
    diets: [],
  });

  function handleChange(e) {
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelectDiet(e) {
    setInput((input) => ({
      ...input,
      diets: [...input.diets, e.target.value],
    }));
    setErrors(
      validate({
        ...input,
        diets: [...input.diets, e.target.value],
      })
    );
  }

  function handleSubmit(e) {
    if (input.title && input.summary && input.image && input.diets.length > 0) {
      e.preventDefault();
      dispatch(postRecipe(input));
      alert("Recipe succesfully Created!!");
      setInput({
        title: "",
        summary: "",
        aggregateLikes: 0,
        healthScore: 0,
        analyzedInstructions: "",
        image: "",
        diets: [],
      });
      history.push("/home");
    } else {
      e.preventDefault();
      alert("You must complete every field!!");
    }
  }

  function handleDelete(e, d) {
    e.preventDefault();
    setInput({
      ...input,
      diets: input.diets.filter((diet) => diet !== d),
    });
  }

  return (
    <>
      <Navbar />
      <div className={s.create}>
        <h1>Create your own Recipe here:</h1>
        <div className={s.form}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>Plate Name:</label>
              <input
                className={s.inputCreate}
                placeholder="Complete here..."
                type="text"
                value={input.title}
                name="title"
                onChange={(e) => handleChange(e)}
              />
              {errors.title && <p>{errors.title}</p>}
            </div>
            <div>
              <label>Summary:</label>
              <input
                className={s.inputCreate}
                placeholder="Complete here..."
                type="text"
                value={input.summary}
                name="summary"
                onChange={(e) => handleChange(e)}
              />
              {errors.summary && <p>{errors.summary}</p>}
            </div>
            <div>
              <label>Score:</label>
              <input
                className={s.inputCreate}
                type="text"
                value={input.aggregateLikes}
                name="aggregateLikes"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Health Level:</label>
              <input
                className={s.inputCreate}
                type="text"
                value={input.healthScore}
                name="healthScore"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={s.labelInstr}>Instructions:</label>
              <textarea
                type="text"
                className="instruction"
                placeholder="Complete here..."
                rows="5"
                value={input.analyzedInstructions}
                name="analyzedInstructions"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                className={s.inputCreate}
                type="text"
                placeholder="Example: https://..."
                value={input.image}
                name="image"
                onChange={(e) => handleChange(e)}
              />
              {errors.image && <p>{errors.image}</p>}
            </div>
            <div className={s.dietsCreate}>
              <span>Type of Diet:</span>
              <select onChange={(e) => handleSelectDiet(e)}>
                {diets.map((diet) => (
                  <option value={diet.name} key={diet.name}>
                    {diet.name}
                  </option>
                ))}
              </select>
              {input.diets.map((diet, index) => (
                <ul key={index}>
                  <li>{diet}</li>
                  <button onClick={(e) => handleDelete(e, diet)}>x</button>
                </ul>
              ))}
              {errors.diets && <p>{errors.diets}</p>}
            </div>
            <button type="submit" className={s.btnCreate}>
              Create Recipe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
