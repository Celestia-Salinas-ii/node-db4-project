exports.seed = function(knex) {
  return knex("recipes")
  .del()
  .then(function() {
      return knex("recipes").insert([
          { name: "Spaghetti" },
          { name: "Macaroni" },
          { name: "Turkey and Peppers" }
      ])
  })
}