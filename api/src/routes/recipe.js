const { Router } = require("express");
const router = Router();

const { recipes, createRecipe, findById } = require("../controllers/recipe");

router.get("/", recipes);
router.get("/:id", findById);
router.post("/new", createRecipe);

module.exports = router;
