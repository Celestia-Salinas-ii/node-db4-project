exports.seed = function(knex) {
  return knex("instructions")
  .del()
  .then(function() {
      return knex("instructions").insert([
          {
              step_number: 1,
              step: "Saute garlic in butter until aromatic",
              recipe_id: 1
            },
          {
              step_number: 2,
              step: "Brown hamburger meat.",
              recipe_id: 1
            },
            {
              step_number: 3,
              step: "Add crushed tomatoes.",
              recipe_id: 1
            },
            {
              step_number: 4,
              step: "Add spices and garlic.",
              recipe_id: 1
            },
            {
              step_number: 5,
              step: "Simmer 30 mins or longer to taste.",
              recipe_id: 1
            },
            {
              step_number: 6,
              step: "Boil pasta to taste.",
              recipe_id: 1
            },
            {
              step_number: 7,
              step: "Strain, add to sauce.",
              recipe_id: 1
            },
            {
              step_number: 8,
              step: "Enjoy!",
              recipe_id: 1
            },
            {
              step_number: 1,
              step: "Saute chopped onions in butter until aromatic.",
              recipe_id: 2
            },
            {
              step_number: 2,
              step: "Add in flour, stir well until onions are covered.",
              recipe_id: 2
            },
            {
              step_number: 3,
              step: "Pour in milk to taste, whisk extremely well.",
              recipe_id: 2
            },
            {
              step_number: 4,
              step: "Add Velveeta Cheese in chunks, stir often to help melt.",
              recipe_id: 2
            },
            {
              step_number: 5,
              step: "Boil pasta to taste.",
              recipe_id: 2
            },
            {
              step_number: 6,
              step: "Strain, add to sauce.",
              recipe_id: 2
            },
            {
              step_number: 1,
              step: "Brown turkey meat.",
              recipe_id: 3
            },
            {
              step_number: 2,
              step: "Add chopped green bell pepper, simmer until soft.",
              recipe_id: 3
            },
            {
              step_number: 3,
              step: "Add 1 can of cream of chicken, 1 can of chicken broth, and as much milk as you feel necessary.",
              recipe_id: 3
            },
            {
              step_number: 4,
              step: "Sprinkle mozzarella cheese on top to taste.",
              recipe_id: 3
            },
            {
              step_number: 5,
              step: "Enjoy!",
              recipe_id: 3
            },

      ])
  })
}