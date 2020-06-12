exports.seed = function(knex) {
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 1,
          unit_measurement: "box"
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: 6,
          unit_measurement: "can"
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          quantity: 2,
          unit_measurement: "lb"
        },
        {
          recipe_id: 1,
          ingredient_id: 4,
          quantity: 2,
          unit_measurement: "tsp"
        },
        {
          recipe_id: 1,
          ingredient_id: 5,
          quantity: 1,
          unit_measurement: "tbs"
        },
        {
          recipe_id: 1,
          ingredient_id: 6,
          quantity: 3,
          unit_measurement: "leaves"
        },
        {
          recipe_id: 1,
          ingredient_id: 7,
          quantity: 1,
          unit_measurement: "tbs"
        },
        {
          recipe_id: 1,
          ingredient_id: 8,
          quantity: 1,
          unit_measurement: "head"
        },
        {
          recipe_id: 1,
          ingredient_id: 12,
          quantity: 1,
          unit_measurement: "stick"
        },
        {
          recipe_id: 2,
          ingredient_id: 9,
          quantity: 0.5,
          unit_measurement: "cup"
        },
        {
          recipe_id: 2,
          ingredient_id: 10,
          quantity: 0.5,
          unit_measurement: "onion"
        },
        {
          recipe_id: 2,
          ingredient_id: 11,
          quantity: 1,
          unit_measurement: "box"
        },
        {
          recipe_id: 2,
          ingredient_id: 12,
          quantity: 0.5,
          unit_measurement: "stick"
        },
        {
          recipe_id: 2,
          ingredient_id: 1,
          quantity: 1,
          unit_measurement: "box"
        },
        {
          recipe_id: 2,
          ingredient_id: 18,
          quantity: 2,
          unit_measurement: "cup"
        },
        {
          recipe_id: 3,
          ingredient_id: 13,
          quantity: 1,
          unit_measurement: "lb"
        },
        {
          recipe_id: 3,
          ingredient_id: 14,
          quantity: 1,
          unit_measurement: "can"
        },
        {
          recipe_id: 3,
          ingredient_id: 15,
          quantity: 1,
          unit_measurement: "can"
        },
        {
          recipe_id: 3,
          ingredient_id: 16,
          quantity: 0.5,
          unit_measurement: "pepper"
        },
        {
          recipe_id: 3,
          ingredient_id: 17,
          quantity: 2,
          unit_measurement: "cup"
        },
        {
          recipe_id: 3,
          ingredient_id: 18,
          quantity: 1,
          unit_measurement: "cup"
        },
      ]);
  });
};