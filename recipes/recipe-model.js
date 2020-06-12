const db = require("../data/dbConfig.js");

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getRecipeById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function getShoppingList(id) {
  return db("recipe_ingredients as rs")
    .join("ingredients as i", "rs.ingredient_id", "i.id")
    .select("i.name", "rs.quantity", "rs.unit_measurement")
    .where({ recipe_id: id });
}

function getInstructions(id) {
  return db("instructions as i")
    .join("recipe as r", "i.recipe_id", "r.id")
    .select("i.step_number", "i.step")
    .where({ recipe_id: id });
}