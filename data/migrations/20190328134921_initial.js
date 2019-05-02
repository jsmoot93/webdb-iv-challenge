exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("dishes", tbl => {
        //PK
        tbl.increments();
  
        //Name
        tbl
          .string("dishName")
          .notNullable()
          .unique();
      })
      .createTable("recipes", tbl => {
        //PK
        tbl.increments();
  
        //Dishes FK
        tbl
          .integer("dish_id")
          .unsigned()
          .notNullable()
          .references("dishes.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
  
        //Name
        tbl
          .string("recipeName")
          .notNullable()
          .unique();
      })
      .createTable("recipe_ingredients", tbl => {
        //PK
        tbl.increments();
  
        //Recipe FK
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipes.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
  
        //Recipe FK
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("ingredients.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
  
        //Ingredient quantity
        tbl.float("quantity").notNullable();
      })
      .createTable("ingredients", tbl => {
        //PK
        tbl.increments();
  
        //Ingredient Name
        tbl
          .string("ingredientName")
          .notNullable()
          .unique();
      })
      .createTable("instructions", tbl => {
        //PK
        tbl.increments();
  
        //Recipe FK
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipes.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
  
        //Instruction content
        tbl
          .text("content")
          .notNullable()
          .unique();
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists("dishes")
      .dropTableIfExists("recipes")
      .dropTableIfExists("recipe_ingredients")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("instructions");
  };