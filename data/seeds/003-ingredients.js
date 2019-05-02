exports.seed = function(knex, Promise) {
    return knex("ingredients").insert([
      { ingredientName: "white bread slice" },
      { ingredientName: "wheat bread slice" },
      { ingredientName: "peanut butter" },
      { ingredientName: "jelly" },
      { ingredientName: "ham" },
      { ingredientName: "noodles" },
      { ingredientName: "sliced cheese" },
      { ingredientName: "melty cheese" }
    ]);
  };