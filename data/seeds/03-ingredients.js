
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: 'taco shells'},
    {ingredient_name: 'tuna'},
    {ingredient_name: 'eggs'},
    {ingredient_name: 'love'}
  ]);
};
