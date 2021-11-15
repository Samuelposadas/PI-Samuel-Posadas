const axios = require("axios");
const { Diet, Recipe } = require("../db");
const { YOUR_API_KEY } = process.env;

const getApiInfo = async () => {
  const apiInfo = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
  );
  return apiInfo.data.results;
};

const getDbInfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const totalInfo = dbInfo.concat(apiInfo);
  return totalInfo;
};

const recipes = async (req, res) => {
  const { name } = req.query;
  const recipesTotal = await getAllRecipes();
  if (name) {
    let recipeTitle = await recipesTotal.filter((recipe) =>
      recipe.title.toLowerCase().includes(name.toLowerCase())
    );
    recipeTitle.length
      ? res.status(200).json(recipeTitle)
      : res.status(400).send("This recipe doesn't exist");
  } else {
    res.status(200).json(recipesTotal);
  }
};

const createRecipe = async (req, res) => {
  let {
    title,
    summary,
    aggregateLikes,
    healthScore,
    analyzedInstructions,
    image,
    diets,
  } = req.body;
  if (!title || !summary) {
    return res.json("You must enter a title and a summary to create a recipe");
  }
  let recipeCreated = await Recipe.create({
    title,
    summary,
    aggregateLikes,
    healthScore,
    analyzedInstructions,
    image,
  });
  let dietDb = await Diet.findAll({ where: { name: diets } });
  recipeCreated.addDiet(dietDb);
  res.send("Recipe created successfully");
};

const findById = async (req, res) => {
  const { id } = req.params;
  const recipesTotal = await getAllRecipes();
  if (id) {
    let recipeId = await recipesTotal.filter((recipe) => recipe.id == id);
    recipeId.length
      ? res.status(200).json(recipeId)
      : res.status(404).send("Recipe not found");
  }
};

module.exports = { recipes, createRecipe, findById };
