const { Router } = require("express");
const router = Router();

const {dietsTypes} = require("../controllers/diets")

router.get("/types", dietsTypes);

module.exports = router;
