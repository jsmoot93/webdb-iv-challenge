exports.seed = function(knex, Promise) {
    return knex("instructions").insert([
        {
          recipe_id: 1,
          content:
            "Use white bread. Spread the pb&j on the bread. Eat!"
        },
        {
          recipe_id: 2,
          content: "Use wheat bread. Spread pb&j. Eat!"
        },
        {
          recipe_id: 3,
          content: "Use white bread with ham and cheese. Toast. Eat!"
        },
        {
          recipe_id: 4,
          content: "Use wheat bread with ham and cheese. Eat!"
        },
        { recipe_id: 5, 
          content: "Ditch ingredients. Make easy mac." 
        }
    ]);
  };