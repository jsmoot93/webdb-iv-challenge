exports.seed = function(knex, Promise) {
    return knex("dishes").insert([
      { dishName: "PB & J" },
      { dishName: "Ham Sandwich" },
      { dishName: "Mac & Cheese" }
    ]);
  };