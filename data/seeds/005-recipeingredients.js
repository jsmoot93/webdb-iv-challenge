exports.seed = function(knex, Promise) {
    return knex("recipe_ingredients").insert([
      { recipe_id: 1, ingredient_id: 1, quantity: 2 },
      { recipe_id: 1, ingredient_id: 3, quantity: 1 },
      { recipe_id: 1, ingredient_id: 4, quantity: 1 },
      { recipe_id: 2, ingredient_id: 2, quantity: 2 },
      { recipe_id: 2, ingredient_id: 3, quantity: 1 },
      { recipe_id: 2, ingredient_id: 4, quantity: 1 },
      { recipe_id: 3, ingredient_id: 1, quantity: 2 },
      { recipe_id: 3, ingredient_id: 5, quantity: 2 },
      { recipe_id: 3, ingredient_id: 7, quantity: 2 },
      { recipe_id: 4, ingredient_id: 2, quantity: 2 },
      { recipe_id: 4, ingredient_id: 5, quantity: 2 },
      { recipe_id: 4, ingredient_id: 7, quantity: 2 },
      { recipe_id: 5, ingredient_id: 6, quantity: 50 },
      { recipe_id: 5, ingredient_id: 8, quantity: 3 }
    ]);
  };