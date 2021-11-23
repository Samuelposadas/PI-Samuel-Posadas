const axios = require("axios");
const { Diet } = require("../db");

const { YOUR_API_KEY } = process.env;

const dietsTypes = async (req, res) => {
  const recipesApi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
  );
  const types = await recipesApi.data.results.map((type) => type.diets);
  const diets = types.flat();
  const typeDiets = [...new Set(diets), "vegetarian"];
  typeDiets.forEach((diet) => {
    Diet.findOrCreate({
      where: { name: diet },
    });
  });
  const allDiets = await Diet.findAll();
  res.status(200).json(allDiets);
};

module.exports = { dietsTypes };
