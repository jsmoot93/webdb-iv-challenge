const router = require("express").Router();
const Recipes = require("../data/helpers/recipes");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const recipes = await Recipes.getRecipes();
      res.status(200).json(recipes);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong fetching the recipes." });
    }
  })
  .post(async (req, res) => {
    const recipe = req.body;
    if (!recipe.dish_id || !recipe.recipeName) {
      res.status(400).json({
        message: "Please provide a dish_id and recipeName for the new recipe."
      });
    }
    try {
      const newRecipe = await Recipes.addRecipe(recipe);
      res.status(201).json(newRecipe);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong adding the recipe." });
    }
  });

module.exports = router;