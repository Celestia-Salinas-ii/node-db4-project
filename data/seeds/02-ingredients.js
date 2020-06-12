exports.seed = function(knex) {
  return knex("ingredients")
  .del()
  .then(function() {
      return knex("ingredients").insert([
          { name: "Pasta", amount: 1 }, //1
          { name: "Crushed Tomato", amount: 1 }, //2
          { name: "Hamburger meat", amount: 1 }, //3
          { name: "Basil", amount: 1 }, //4
          { name: "Italian Seasoning", amount: 1 }, //5
          { name: "Bay Leaves", amount: 1 }, //6
          { name: "Parsley", amount: 1 }, //7
          { name: "Garlic", amount: 1 }, //8
          { name: "Flour", amount: 1 }, //9
          { name: "Chopped Onions", amount: 1 }, //10
          { name: "Velveeta Cheese", amount: 1 }, //11
          { name: "Butter", amount: 1 }, //12
          { name: "Ground Turkey", amount: 1 }, //13
          { name: "Cream of Chicken", amount: 1 }, //14
          { name: "Chicken Broth", amount: 1 }, //15
          { name: "Green Bell Pepper", amount: 1 }, //16
          { name: "Mozzarela Cheese", amount: 1 }, //17
          { name: "Milk", amount: 1 } //18
      ])
  })
}