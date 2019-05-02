const db = require("../config");

module.exports = {
  getRecipes,
  addRecipe,
  getShoppingList
};

function getRecipes() {
  return db("recipes")
    .innerJoin("dishes", "recipes.dish_id", "dishes.id")
    .select({
      dish: "dishes.dishName",
      recipe: "recipes.recipeName",
      dish_id: "recipes.dish_id",
      id: "recipes.id"
    });
}

async function addRecipe(recipe) {
  const [id] = await db("recipes").insert(recipe);

  return db("recipes")
    .where({ id })
    .first();
}

function getShoppingList(recipe) {
  //return some db code here
}