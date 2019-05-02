exports.seed = function(knex, Promise) {
    return knex("recipes").insert([
      { dish_id: 1, recipeName: "Brandons PB & J" },
      { dish_id: 1, recipeName: "Cydneys PB & J" },
      { dish_id: 2, recipeName: "Super Ham Sammy" },
      { dish_id: 2, recipeName: "Tour de Hamme" },
      { dish_id: 3, recipeName: "Super Cheez Mac" }
    ]);
};