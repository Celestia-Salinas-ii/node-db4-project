
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable().unique();

    })
    .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable().unique();
        tbl.integer("amount").notNullable();
    })
    .createTable("instructions", tbl => {
        tbl.increments();
        tbl.integer("step_number", 300).notNullable();
        tbl.string("step", 1000).notNullable();
        tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("recipe_ingredients", tbl => {
        tbl.primary(["recipe_id", "ingredient_id"]);
        tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        tbl.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        tbl.float("quantity").notNullable();
        tbl.string("unit_measurement", 300).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
